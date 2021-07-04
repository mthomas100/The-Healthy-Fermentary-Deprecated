import { TextField } from '@material-ui/core';
import { useEffect } from 'react';
import { useCheckout } from '../lib/checkoutState';
import useForm from '../lib/useForm';

export default function Address({ variant }) {
  const { inputs, handleChange, resetForm } = useCheckout();

  useEffect(() => {
    // REFACTORING OPPORTUNITY
    // search file for its "name" => dynamically send this as a state val for context
  }, []);

  return (
    <>
      <TextField
        id="firstName"
        name="firstName"
        className="firstName"
        label="First Name"
        required
        autocomplete="given-name"
        value={inputs.firstName}
        onChange={handleChange}
        variant={variant}
      />
      <TextField
        id="lastName"
        name="lastName"
        className="lastName"
        label="Last Name"
        required
        autocomplete="family-name"
        value={inputs.lastName}
        onChange={handleChange}
        variant={variant}
      />
      <TextField
        id="address1"
        name="address1"
        className="address1 fullWidth"
        label="Address Line 1"
        required
        autocomplete="address-line1"
        value={inputs.address1}
        onChange={handleChange}
        variant={variant}
      />

      <TextField
        id="address2"
        name="address2"
        className="address2 fullWidth"
        label="Address Line 2"
        autocomplete="address-line2"
        value={inputs.address2}
        onChange={handleChange}
        variant={variant}
      />
      <TextField
        id="city"
        name="city"
        className="city"
        label="City"
        required
        autocomplete="city"
        value={inputs.city}
        onChange={handleChange}
        variant={variant}
      />
      <TextField
        id="region"
        name="region"
        className="region"
        label="State / Province / Region"
        required
        autocomplete="country-name"
        value={inputs.region}
        onChange={handleChange}
        variant={variant}
      />
      <TextField
        id="zipCode"
        name="zipCode"
        className="zipCode"
        label="Zip Code"
        required
        autocomplete="postal-coded"
        value={inputs.zipCode}
        onChange={handleChange}
        variant={variant}
      />
      <TextField
        id="country"
        name="country"
        className="country"
        label="Country"
        autocomplete="country-name"
        required
        value={inputs.country}
        onChange={handleChange}
        variant={variant}
      />
    </>
  );
}
