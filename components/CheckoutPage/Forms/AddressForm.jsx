import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FormFields';

// const cities = [
//   {
//     value: undefined,
//     label: 'None',
//   },
//   {
//     value: '1',
//     label: 'New York',
//   },
//   {
//     value: '2',
//     label: 'Chicago',
//   },
//   {
//     value: '3',
//     label: 'Saigon',
//   },
// ];

const states = [
  {
    value: 'AN',
    label: 'Andaman and Nicobar Islands',
  },
  {
    value: 'AP',
    label: 'Andhra Pradesh',
  },
  {
    value: 'AR',
    label: 'Arunachal Pradesh',
  },
  {
    value: 'AS',
    label: 'Assam',
  },
  {
    value: 'BR',
    label: 'Bihar',
  },
  {
    value: 'CG',
    label: 'Chandigarh',
  },
  {
    value: 'CH',
    label: 'Chhattisgarh',
  },
  {
    value: 'DH',
    label: 'Dadra and Nagar Haveli',
  },
  {
    value: 'DD',
    label: 'Daman and Diu',
  },
  {
    value: 'DL',
    label: 'Delhi',
  },
  {
    value: 'GA',
    label: 'Goa',
  },
  {
    value: 'GJ',
    label: 'Gujarat',
  },
  {
    value: 'HR',
    label: 'Haryana',
  },
  {
    value: 'HP',
    label: 'Himachal Pradesh',
  },
  {
    value: 'JK',
    label: 'Jammu and Kashmir',
  },
  {
    value: 'JH',
    label: 'Jharkhand',
  },
  {
    value: 'KA',
    label: 'Karnataka',
  },
  {
    value: 'KL',
    label: 'Kerala',
  },
  {
    value: 'LD',
    label: 'Lakshadweep',
  },
  {
    value: 'MP',
    label: 'Madhya Pradesh',
  },
  {
    value: 'MH',
    label: 'Maharashtra',
  },
  {
    value: 'MN',
    label: 'Manipur',
  },
  {
    value: 'ML',
    label: 'Meghalaya',
  },
  {
    value: 'MZ',
    label: 'Mizoram',
  },
  {
    value: 'NL',
    label: 'Nagaland',
  },
  {
    value: 'OR',
    label: 'Odisha',
  },
  {
    value: 'PY',
    label: 'Puducherry',
  },
  {
    value: 'PB',
    label: 'Punjab',
  },
  {
    value: 'RJ',
    label: 'Rajasthan',
  },
  {
    value: 'SK',
    label: 'Sikkim',
  },
  {
    value: 'TN',
    label: 'Tamil Nadu',
  },
  {
    value: 'TS',
    label: 'Telangana',
  },
  {
    value: 'TR',
    label: 'Tripura',
  },
  {
    value: 'UK',
    label: 'Uttar Pradesh',
  },
  {
    value: 'UP',
    label: 'Uttarakhand',
  },
  {
    value: 'WB',
    label: 'West Bengal',
  },
];

const countries = [
  {
    value: '111',
    label: 'India',
  },
];

export default function AddressForm(props) {
  const {
    formField: {
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zipcode,
      country,
      useAddressForPaymentDetails,
    },
  } = props;
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address1.name} label={address1.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address2.name} label={address2.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={city.name} label={city.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={zipcode.name} label={zipcode.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxField
            name={useAddressForPaymentDetails.name}
            label={useAddressForPaymentDetails.label}
          />
        </Grid>
      </Grid>
    </>
  );
}
