import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import styled from 'styled-components';
import Address from './Address';
import FormSection from './FormSection';
import PaymentDetails from './PaymentDetails';
import SubmitOrder from './SubmitOrder';

const CheckoutFormStyles = styled.div`
  max-width: 500px;
  min-width: 500px;
`;

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

export default function CheckoutForm() {
  return (
    <div>
      <CheckoutFormStyles>
        <Elements stripe={stripePromise}>
          <FormSection>
            <h1 className="fullWidth">Shipping Details</h1>
            <Address variant="outlined" />
          </FormSection>

          <FormSection>
            <h1 className="fullWidth">Payment Details</h1>
            <PaymentDetails variant="outlined" />
          </FormSection>

          <FormSection>
            <SubmitOrder />
          </FormSection>
        </Elements>
      </CheckoutFormStyles>
    </div>
  );
}
