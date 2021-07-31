import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';
import { Button as ButtonMUI, FormHelperText } from '@material-ui/core';
import { useState } from 'react';
import uuid from 'react-uuid';
import { useCart } from '../lib/cartState';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: '1rem 0',
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: '0',
    textAlign: 'center',
  },
}));

const Button = styled(ButtonMUI)`
  && {
    background-color: #000000c5;
    margin-top: 1rem;

    &:hover {
      background-color: #01050373;
    }
  }
`;

const quantityArrMap = Array.from(Array(10).keys());

export default function AddToCart({ product }) {
  const classes = useStyles();
  const { modifyCartQuantity, openCart } = useCart();
  const [selectValue, setSelectValue] = useState(1);

  function handleAddToCart() {
    modifyCartQuantity(product, selectValue); // TODO: Needs to add X to whats already there
    openCart();
  }

  return (
    <FormControl
      className={`${classes.formControl}`}
      variant="outlined"
      size="small"
      style={{
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: 'inset 4px 0px 8px 0 rgba(0, 0, 0, 0.1)',
      }}
    >
      <Select
        labelId="demo-simple-select-placeholder-label-label"
        id="demo-simple-select-placeholder-label"
        defaultValue="something"
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
        className={classes.selectEmpty}
        displayEmpty
      >
        {quantityArrMap.map(
          (_, i) =>
            i > 0 && (
              <MenuItem value={i} key={uuid()}>
                {i}
              </MenuItem>
            )
        )}
      </Select>
      <Button
        onClick={handleAddToCart}
        variant="contained"
        color="primary"
        classes={classes.btn}
        size="large"
      >
        Add to Cart
      </Button>
    </FormControl>
  );
}
