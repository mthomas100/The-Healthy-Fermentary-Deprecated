/* pages/checkout.js */

import React, { useContext } from 'react';

import { Row, Col } from 'reactstrap';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import InjectedCheckoutForm from '../components/checkout/CheckoutForm';
// import AppContext from '../context/AppContext';

// import Cart from '../components/cart/';

function Checkout() {
  // get app context
  //   const appContext = useContext(AppContext);
  // isAuthenticated is passed to the cart component to display order button
  //   const { isAuthenticated } = appContext;

  // load stripe to inject into elements components
  const stripePromise = loadStripe(
    `pk_test_51INLCdLkyKorMoe0oQIbJc5RxSPT6j5LwLfpeILcvnl6ECAY2zE3S6VQcxzVfvhXaF5CjZmqzCyFTGLXJde3sRjK00k7nycbGS`
  );

  return (
    <Elements stripe={stripePromise}>
      <InjectedCheckoutForm />
    </Elements>
  );
  // }
}
export default Checkout;
