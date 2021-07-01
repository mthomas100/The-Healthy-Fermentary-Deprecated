import styled from 'styled-components';
import { Elements } from '@stripe/react-stripe-js';
import { FormControl } from '@material-ui/core';
import { loadStripe } from '@stripe/stripe-js';
import Address from './Address';
import PaymentDetails from './PaymentDetails';
import SubmitOrder from './SubmitOrder';

const CheckoutContainer = styled.div`
  position: relative;
  top: 2rem;
  padding: 1rem;
  height: auto;
  max-width: 500px;
  min-width: 180px;
  margin: 0 auto;

  .formControl {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    display: grid;
    padding: 2rem;
    grid-template-columns: 1fr 1fr;
    /* grid-auto-flow: row; */
    grid-column-gap: 2rem;
    align-items: center;
    grid-template-rows: auto;
    grid-row-gap: 2rem;

    .fullWidth {
      grid-column: 1/3;
    }
  }

  @media only screen and (max-width: 660px) {
    .checkOutEl {
      grid-template-columns: 1fr;
    }

    .fullWidth {
      grid-column: 1/2 !important;
    }
  }
`;

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

export default function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutContainer>
        <FormControl
          className="formControl" /* noValidate autoComplete="off" */
        >
          <Address />

          <PaymentDetails />

          <SubmitOrder />
        </FormControl>
      </CheckoutContainer>
    </Elements>
  );
}
