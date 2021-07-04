import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import NProgress from 'nprogress';
import Router from 'next/router';
import { useCheckout } from '../lib/checkoutState';
import { useCart } from '../lib/cartState';

export default function SubmitOrder() {
  // ON SUBMIT, TAKE INPUTS FROM CONTEXT SEND TO BACKEND/STRIPE
  // STRIPE STATE ALREADY TAKEN FROM THE CardElement import
  const { inputs } = useCheckout();
  const { cartContents } = useCart();

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  async function submitOrder(e) {
    // 1. Stop the form from submitting and turn the loader one
    setLoading(true);
    e.preventDefault();

    // 2. Start the page transition so show the user something is happening
    NProgress.start();

    // 3. Create the payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        name: `${inputs.firstName} ${inputs.lastName}`,
        address: {
          line1: inputs.address1,
          line2: inputs.address2,
          postal_code: inputs.zipCode,
          state: inputs.region,
          country: inputs.country,
        },
      },
    });

    // 4. Handle any (client-side related) errors from stripe
    if (error) {
      NProgress.done();
      console.log(error);
      return setError(error);
    }

    console.log('I DONT GET EXECUTED IF THERE IS AN ERROR IN PREV STEP');

    // 5. Send payment ID and Order Information to Server

    // TODO: REFACTOR BY DESTRUCTURING ABOVE FROM THE HOOK/CONTEXT
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
      method: 'POST',
      //   headers: userToken && { Authorization: `Bearer ${userToken}` },
      body: JSON.stringify({
        ...inputs,
        total: '100', // USE CALCTOTAL FUNCTION HERE (OR) GRAB RUNNING TOTAL FROM USECART [CAN IT BE APPENDED TO OBJECT UPON ===> CHECKOUT]
        cartContents, // [] if not filled out. don't stripe charge if this condition exists
        email: 'email@gmail.com',
        token: paymentMethod.id,
      }),
    });

    const order = await response.json();

    // DEPENDING ON THIS RESPONSE TELL USER THEIR ORDER WAS SUCCESSFUL OR NOT
    console.log(response);
    console.log(order);

    // if (!response.ok) {
    //   setError(response.statusText);
    // }

    // 6. Change the page to the new order
    // TODO: <--- RESPONSE FROM SERVER INDICATES WHAT THIS ROUTE WILL BE
    // TODO: <--- SET UP FOLDER BASED ROUTING TO REFLECT THIS
    // BELOW : WB example of routing

    // Router.push({
    //   pathname: '/order',
    //   query: { id: order.data.checkout.id },
    // });

    // 7. Turn loader off
    setLoading(false);
    // TODO: configure a set loading thing for portions of the multistep form to disallow editing
  }
  return (
    <button type="button" onClick={submitOrder} className="fullWidth">
      Submit
    </button>
  );
}
