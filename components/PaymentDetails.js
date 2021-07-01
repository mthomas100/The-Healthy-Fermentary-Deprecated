import { TextField } from '@material-ui/core';
import { CardElement } from '@stripe/react-stripe-js';
import { useCheckout } from '../lib/checkoutState';
import StripeTextField from './StripeTextField';

export default function PaymentDetails() {
  return (
    <>
      <div className="stripeWrapper fullWidth" style={{ fontSize: '2px' }}>
        <StripeTextField label="Credit Card" stripeElement={CardElement} />
      </div>
    </>
  );
}
