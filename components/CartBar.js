import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import CartIcon from './CartIcon';
import { useCart } from '../lib/cartState';
import CartItem from './CartItem';
import calcTotalPrice from '../lib/calcTotalPrice';

const CartBarStyles = styled.div`
  width: ${(props) => (props.cartItemTotal > 0 ? '200px' : '75px')};
  minwidth: ${(props) => (props.cartItemTotal > 0 ? '200px' : '75px')};
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  border-top-left-radius: 5px;
  min-height: 100%; //this may need to be on _app.js
  /* margin-top: 4rem; */
  transition: 0.3s width;
  transform: translateX(100%);
  position: absolute;
  right: 0;

  .cartWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem;
    height: auto;
    position: sticky;
    top: 0;
    right: 0;
  }

  .cartIconWrapper {
    padding-top: 4rem;
    margin-bottom: 2rem;
    font-family: 'Nunito';
  }

  .itemCount {
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    font-family: 'Nunito';
    /* margin: 0.5rem 0; */
  }

  .totalValue {
    font-weight: 800;
    white-space: nowrap;
    margin: 0.5rem auto 2rem auto;
    font-size: 1.4rem;
    font-family: 'Nunito';
    color: #af1313;
  }
`;

const useStyles = makeStyles((theme) => ({
  checkoutButton: {
    margin: '0 0 2rem 0',
    width: '100%',
    border: '1px solid #0000006a',
  },
}));

export default function CartBar() {
  const { cartContents, openCart, cartItemTotal } = useCart();
  const classes = useStyles();
  // const CartBarRef = useRef(null);

  return (
    <CartBarStyles cartItemTotal={cartItemTotal}>
      <div className="cartWrapper">
        <div className="cartIconWrapper">
          <CartIcon onClick={openCart} />
        </div>
        {cartItemTotal > 0 && (
          <>
            <div className="itemCount">{cartItemTotal} items</div>
            {cartItemTotal !== 0 && (
              <div className="totalValue">
                <b>₹</b> {calcTotalPrice(cartContents)}
              </div>
            )}
            <Link href="/checkout">
              <Button
                variant="outlined"
                size="large"
                className={classes.checkoutButton}
              >
                Checkout
              </Button>
            </Link>
          </>
        )}

        {cartContents.map((product) => (
          <CartItem product={product} />
        ))}
      </div>
    </CartBarStyles>
  );
}
