import styled from 'styled-components';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CartIcon from './CartIcon';
import { useCart } from '../lib/cartState';

const CartBarStyles = styled.div`
  width: 100px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  border-top-left-radius: 5px;
  height: 100vh;
  /* margin-top: 4rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;

  .cartIconWrapper {
    padding-top: 4rem;
    margin-bottom: 4rem;
  }

  .cartItem {
    width: 100%;
    margin-bottom: 3rem;
  }

  .MuiSelect-icon {
    top: unset !important;
  }
`;

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: '1.75rem 0',
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: '0',
    textAlign: 'center',
  },
  inputLabel: {
    width: '100%',
    fontSize: '1.3rem',
    position: 'relative',
  },
}));

export default function CartBar() {
  const { cartContents, openCart, modifyCartQuantity } = useCart();
  console.log(cartContents);

  const classes = useStyles();

  const quantityArrMap = Array.from(Array(10).keys());

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    console.log('cartContents has changed');
  }, [cartContents]);

  return (
    <CartBarStyles>
      <div className="cartIconWrapper">
        <CartIcon onClick={openCart} />
      </div>
      {cartContents.map((product) => {
        console.log(product.quantity);
        return (
          <div className="cartItem">
            <Image
              src={product.image.url}
              alt="Picture of the author"
              width="100%"
              height="auto"
              layout="responsive"
            />
            <FormControl
              className={classes.formControl}
              variant="outlined"
              size="small"
            >
              <InputLabel
                shrink
                id="demo-simple-select-placeholder-label-label"
                className={classes.inputLabel}
              >
                Quantity
              </InputLabel>
              <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={product.quantity}
                onChange={(e) => modifyCartQuantity(product.id, e.target.value)}
                displayEmpty
                className={classes.selectEmpty}
              >
                {quantityArrMap.map((_, i) => (
                  <MenuItem value={i}>{i}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        );
      })}
    </CartBarStyles>
  );
}
