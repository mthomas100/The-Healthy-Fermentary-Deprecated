import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Input } from '@material-ui/core';
import styled from 'styled-components';
import { Button } from 'rebass';
import useForm from '../lib/useForm';

const FormStyles = styled.form`
  .input {
    min-width: 100%;
    margin-right: auto;
  }
`;

export default function Address() {
  const addressRef = React.useRef(null);
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: '',
    street: '',
    street2: '',
    city: '',
    state: '',
    zip: '',
  });

  return (
    <FormStyles
      ref={addressRef}
      className=""
      onSubmit={() => console.log('submitting')}
    >
      <TextField
        className="input"
        label="name"
        name="name"
        value={inputs.name}
        onChange={handleChange}
        required
      />

      <TextField
        className="input"
        label="street address 1"
        value={inputs.street}
        name="street"
        onChange={handleChange}
        required
      />

      <TextField
        className="input"
        label="street address 2"
        value={inputs.street2}
        name="street2"
        onChange={handleChange}
      />

      <TextField
        className="input"
        label="city"
        value={inputs.city}
        name="city"
        onChange={handleChange}
        required
      />

      <TextField
        className="input"
        label="state"
        value={inputs.state}
        name="state"
        onChange={handleChange}
        required
      />

      <TextField
        className="input"
        label="zip code"
        value={inputs.zip}
        name="zip"
        onChange={handleChange}
        required
      />
    </FormStyles>
  );
}

{
  /* <div>
        <TextField label="zip" value={zip} name="zip" onChange={handleChange} />
      </div>
      <select format={this.state.value} onChange={handleChange}>
        <option name="format1" value="format1">
          format1
        </option>
        <option name="format2" value="format2">
          format2
        </option>
        <option name="format3" value="format3">
          format3
        </option>
      </select>

      <button variant="contained" color="primary" onClick={this.handleSubmit}>
        Submit
      </button> */
}
