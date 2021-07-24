import { CardElement } from '@stripe/react-stripe-js';
import StripeTextField from './StripeTextField';

export default function PaymentDetails({ variant }) {
  return (
    <>
      <h1>Payment Details</h1>
      <div
        className="textField stripeWrapper fullWidth"
        style={{ fontSize: '2px', backgroundColor: 'transparent' }}
      >
        <StripeTextField
          label="" //  "Credit Card"
          stripeElement={CardElement}
          variant={variant}
        />
      </div>
    </>
  );
}
