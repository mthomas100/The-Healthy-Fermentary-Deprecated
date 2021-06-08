import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export default function Payment() {
  return (
    <Elements stripe={stripePromise}>
      <ElementDemos demos={demos} />
    </Elements>
  );
}
