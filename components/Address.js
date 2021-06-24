import { TextField } from '@material-ui/core';

export default function Address() {
  return (
    <>
      <TextField
        id="firstName"
        className="firstName"
        label="First Name"
        required
        autocomplete="given-name"
      />
      <TextField
        id="lastName"
        className="lastName"
        label="Last Name"
        required
        autocomplete="family-name"
      />
      <TextField
        id="address1"
        className="address1 fullWidth"
        label="Address Line 1"
        required
        autocomplete="address-line1"
      />

      <TextField
        id="address2"
        className="address2 fullWidth"
        label="Address Line 2"
        autocomplete="address-line2"
      />
      <TextField
        id="city"
        className="city"
        label="City"
        required
        autocomplete="city"
      />
      <TextField
        id="country"
        className="country"
        label="State / Province / Region"
        required
        autocomplete="country-name"
      />
      <TextField
        id="zipCode"
        className="zipCode"
        label="Zip Code"
        required
        autocomplete="postal-coded"
      />
      <TextField
        id="country"
        className="country"
        label="Country"
        autocomplete="country-name"
        required
      />
    </>
  );
}
