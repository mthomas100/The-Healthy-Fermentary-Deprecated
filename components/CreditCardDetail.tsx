import React, { useState } from 'react';
import {
  StripeTextFieldNumber,
  StripeTextFieldExpiry,
  StripeTextFieldCVC,
} from './commonTextFields';

export default function CreditCardDetail() {
  const [state, setState] = React.useState({
    cardNumberComplete: false,
    expiredComplete: false,
    cvcComplete: false,
    cardNumberError: null,
    expiredError: null,
    cvcError: null,
  });

  const onElementChange =
    (field, errorField) =>
    ({ complete, error = { message: null } }) => {
      setState({ ...state, [field]: complete, [errorField]: error.message });
    };

  const { cardNumberError, expiredError, cvcError } = state;
  return (
    <>
      <StripeTextFieldNumber
        error={Boolean(cardNumberError)}
        labelErrorMessage={cardNumberError}
        onChange={onElementChange('cardNumberComplete', 'cardNumberError')}
      />
      <StripeTextFieldExpiry
        error={Boolean(expiredError)}
        labelErrorMessage={expiredError}
        onChange={onElementChange('expiredComplete', 'expiredError')}
      />
      <StripeTextFieldCVC
        error={Boolean(cvcError)}
        labelErrorMessage={cvcError}
        onChange={onElementChange('cvcComplete', 'cvcError')}
      />
    </>
  );
}
