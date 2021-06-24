import { TextField } from '@material-ui/core';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import InjectedCheckoutForm from './checkout/CheckoutForm';
import CardSection from './CardSection';
// GIST
import StripeElementWrapper from './StripeElementWrapper';

export default function PaymentDetails() {
  // consider replacing any below state with context
  const [data, setData] = useState({
    address: '',
    city: '',
    state: '',
    stripe_id: '',
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  async function submitOrder(e) {
    // 1. Stop the form from submitting and turn the loader one
    e.preventDefault();
    setLoading(true);
    // // Use elements.getElement to get a reference to the mounted Element.
    const cardElement = elements.getElement(CardElement);

    // // Pass the Element directly to other Stripe.js methods:
    // // e.g. createToken - https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
    // get token back from stripe to process credit card

    // const token = await stripe.createToken(cardElement);
    // console.log(token);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    // 4. Handle any errors from stripe
    if (error) {
      setError(error);
      return; // stops the checkout from happening
    }

    // 5. Send the token from step 3 to our  server, via a custom mutation!

    // const userToken = Cookies.get('token');
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
      method: 'POST',
      //   headers: userToken && { Authorization: `Bearer ${userToken}` },
      body: JSON.stringify({
        total: '20', // USE CALCTOTAL FUNCTION HERE (OR) GRAB RUNNING TOTAL FROM USECART [CAN IT BE APPENDED TO OBJECT UPON ===> CHECKOUT]
        cartContents: 'PASS CARTCONTENTS HERE',
        email: 'PASS EMAIL HERE',
        name: 'PASS NAME HERE',
        token: paymentMethod.id,
      }),
    });

    if (!response.ok) {
      setError(response.statusText);
    }

    console.log(response);

    // OTHER stripe methods you can use depending on app
    // // or createPaymentMethod - https://stripe.com/docs/js/payment_intents/create_payment_method
    // stripe.createPaymentMethod({
    //   type: "card",
    //   card: cardElement,
    // });

    // // or confirmCardPayment - https://stripe.com/docs/js/payment_intents/confirm_card_payment
    // stripe.confirmCardPayment(paymentIntentClientSecret, {
    //   payment_method: {
    //     card: cardElement,
    //   },
    // });
  }

  return (
    <>
      {/* <InjectedCheckoutForm /> */}
      {/* <CardSection data={data} stripeError={error} submitOrder={submitOrder} /> */}
      <StripeElementWrapper label="Card Number" component={CardNumberElement} />
      <StripeElementWrapper
        label="Expiry (MM / YY)"
        component={CardExpiryElement}
      />
      <StripeElementWrapper label="CVC" component={CardCvcElement} />

      <TextField
        id="firstName"
        className="firstName"
        label="First Name"
        required
        autocomplete="given-name"
      />
      <TextField
        id="lastName"
        className="lastName"
        label="Last Name"
        required
        autocomplete="family-name"
      />
      <TextField
        id="address1"
        className="address1 fullWidth"
        label="Address Line 1"
        required
        autocomplete="address-line1"
      />

      <TextField
        id="address2"
        className="address2 fullWidth"
        label="Address Line 2"
        autocomplete="address-line2"
      />
      <TextField
        id="city"
        className="city"
        label="City"
        required
        autocomplete="city"
      />
      <TextField
        id="country"
        className="country"
        label="State / Province / Region"
        required
        autocomplete="country-name"
      />
      <TextField
        id="zipCode"
        className="zipCode"
        label="Zip Code"
        required
        autocomplete="postal-coded"
      />
      <TextField
        id="country"
        className="country"
        label="Country"
        autocomplete="country-name"
        required
      />
    </>
  );
}
