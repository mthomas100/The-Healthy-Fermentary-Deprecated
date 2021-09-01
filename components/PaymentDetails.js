import { CardElement } from '@stripe/react-stripe-js';
import styled from 'styled-components';
import StripeTextField from './StripeTextField';

const PaymentDetailsStyles = styled.div`
  padding-top: 1rem;
`;

export default function PaymentDetails({ variant }) {
  return (
    <PaymentDetailsStyles className="fullWidth">
      <h1>Payment Details</h1>
      <div
        style={{
          fontSize: '2px',
          backgroundColor: 'transparent',
        }}
      >
        <StripeTextField
          label="" //  "Credit Card"
          stripeElement={CardElement}
          variant={variant}
        />
      </div>
    </PaymentDetailsStyles>
  );
}
