import { TextField } from '@material-ui/core';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import StripeTextField from './StripeTextField';

export default function PaymentDetails(props) {
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
  }

  return (
    <>
      {/* <InjectedCheckoutForm /> */}
      <div className="stripeWrapper fullWidth" style={{ fontSize: '10px' }}>
        <StripeTextField label="Credit Card" stripeElement={CardElement} />
        <button type="button" onClick={submitOrder}>
          Submit Order
        </button>
      </div>
    </>
  );
}
