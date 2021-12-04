import styled from 'styled-components';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useRef, useEffect } from 'react';
import Stepper from './Stepper';

const CheckoutStyles = styled.div`
  position: relative;
  top: 2rem;
  padding: 0 4rem;
  padding-bottom: 6rem;
  gap: 2rem;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;
  min-height: 100vh;

  @media only screen and (max-width: 440px) {
    padding: 0 0rem;
    padding-bottom: 6rem;
  }

  @media only screen and (max-width: 350) {
    padding: 0;
    padding-bottom: 6rem;
  }
`;

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

export default function Checkout() {
  const checkoutRef = useRef();

  return (
    <CheckoutStyles ref={checkoutRef}>
      <Elements stripe={stripePromise}>
        <Stepper />
        {/* <CheckoutForm />
        <CartSummary /> */}
      </Elements>
    </CheckoutStyles>
  );
}
