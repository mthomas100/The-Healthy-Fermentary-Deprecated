// PRODUCTION READY CARD SECTION

import { CardElement } from '@stripe/react-stripe-js';
import { TextField, FormControl } from '@material-ui/core';

export default function CardSection(props) {
  return (
    <div>
      <CardElement />
    </div>
  );
}
