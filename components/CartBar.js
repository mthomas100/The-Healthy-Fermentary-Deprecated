import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import CartIcon from './CartIcon';
import { useCart } from '../lib/cartState';
import CartBarItem from './CartBarItem';
import calcTotalPrice from '../lib/calcTotalPrice';

const CartBarStyles = styled.div`
  min-width: 75px;
  max-width: ${(props) => (props.cartHover ? `200px` : `100px`)};
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  border-top-left-radius: 5px;
  min-height: 100%; //this may need to be on _app.js
  /* margin-top: 4rem; */
  transition: 0.4s all;
  transform: ${(props) =>
    props.cartOpen ? `translateX(0%)` : `translateX(100%)`};
  position: absolute;
  right: 0;

  .cartWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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

  .buttonWrapper {
    width: 100%;
    padding: 1rem 2rem 0 2rem;
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
  const { cartContents, openCart, cartItemTotal, cartOpen } = useCart();
  const classes = useStyles();
  // const CartBarRef = useRef(null);
  const [cartHover, setCartHover] = useState(false);

  return (
    <CartBarStyles
      cartItemTotal={cartItemTotal}
      cartOpen={cartOpen}
      cartHover={cartHover}
      onMouseOver={() => setCartHover(true)}
      onMouseEnter={() => setCartHover(true)}
      onMouseLeave={() => setCartHover(false)}
      onMouseOut={() => setCartHover(false)}
    >
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
              <div className="buttonWrapper">
                <Button
                  variant="outlined"
                  size="large"
                  className={classes.checkoutButton}
                >
                  Checkout
                </Button>
              </div>
            </Link>
          </>
        )}

        {cartContents.map((product, i) => (
          <CartBarItem product={product} i={i} cartHover={cartHover} />
        ))}
      </div>
    </CartBarStyles>
  );
}
