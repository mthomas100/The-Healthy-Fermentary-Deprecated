import styled from 'styled-components';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useRef, useEffect } from 'react';
import Stepper from './Stepper';
import { useLayout } from '../lib/layoutState';
import { useWindowSize } from '../lib/useWindowSize';

const CheckoutStyles = styled.div`
  position: relative;
  top: 2rem;
  padding: 22rem 0 6rem 0;
  gap: 2rem;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;
  height: 100vh;
`;

// Step Circle with # inside it
// Line between dots
// Centered (middle dot always middle of screen)
// Current Step Colored. Finished Step Checked & Colored
// make step # scheme generate programmatically

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

export default function Checkout() {
  const checkoutRef = useRef();
  const { setCheckoutLeftOffset } = useLayout();
  const windowSize = useWindowSize();

  useEffect(() => {
    setCheckoutLeftOffset(checkoutRef.current.offsetLeft);
  }, [windowSize]);

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
