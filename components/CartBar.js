import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import CartIcon from './CartIcon';
import { useCart } from '../lib/cartState';
import CartBarItem from './CartBarItem';
import calcTotalPrice from '../lib/calcTotalPrice';

const CartBarStyles = styled(motion.div)`
  position: absolute;
  /* display: flex; */
  top: 12rem;
  right: 4px;
  height: auto;
  min-height: 100%;

  .cartBarWrapper {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    position: sticky;
    top: 0;
    border-top-left-radius: 2rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 0.5rem;
  }

  .cartBar {
    align-self: flex-start;
    background-color: #ffffff;

    /* transition: 0.4s all;
    transform: ${(props) =>
      props.cartOpen ? `translateX(0%)` : `translateX(100%)`}; */

    background-color: rgba(255, 255, 255, 0.02);
    min-height: 40rem;
  }

  .cartIconWrapper {
    padding-top: 4rem;
    margin-bottom: 2rem;
    font-family: 'Nunito';
  }

  .cartDetails {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .itemCount {
      font-size: 1.4rem;
      letter-spacing: 0.1rem;
      font-family: 'Nunito';
      margin: 0 auto;
    }

    .totalValue {
      font-weight: 800;
      white-space: nowrap;
      margin: 0.5rem auto 2rem auto;
      font-size: 1.4rem;
      font-family: 'Nunito';
      color: #af1313;
    }
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
  const {
    cartContents,
    cartItemTotal,
    openCart,
    cartOpen,
    cartHover,
    setCartHover,
  } = useCart();
  const classes = useStyles();
  // const CartBarRef = useRef(null);

  const variantsFade = {
    open: {
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
    closed: {
      opacity: 0,
    },
  };

  const variantsShrink = {
    open: {
      width: 'auto',
      transition: {
        damping: 100,
      },
    },
    closed: {
      width: 0,
      transition: {
        delay: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {cartOpen && (
        <CartBarStyles
          variants={variantsShrink}
          initial="closed"
          animate="open"
          exit="closed"
          cartItemTotal={cartItemTotal}
          cartOpen={cartOpen}
          cartHover={cartHover}
          onMouseOver={() => setCartHover(true)}
          onMouseEnter={() => setCartHover(true)}
          onMouseLeave={() => setCartHover(false)}
          onMouseOut={() => setCartHover(false)}
        >
          <div className="cartBarWrapper">
            <motion.div
              className="cartBar"
              variants={variantsFade}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="cartIconWrapper">
                <CartIcon onClick={openCart} />
              </div>
              {cartItemTotal > 0 && (
                <>
                  <div className="cartDetails">
                    <div className="itemCount">{cartItemTotal} items</div>
                    {cartItemTotal !== 0 && (
                      <div className="totalValue">
                        <b>₹</b> {calcTotalPrice(cartContents)}
                      </div>
                    )}
                  </div>

                  <div className="buttonWrapper">
                    <Link href="/checkout" passHref>
                      <Button
                        variant="outlined"
                        size="large"
                        className={classes.checkoutButton}
                      >
                        Checkout
                      </Button>
                    </Link>
                  </div>
                </>
              )}

              {cartContents.map((product, index) => (
                <CartBarItem
                  key={product.id}
                  product={product}
                  index={index}
                  cartHover={cartHover}
                />
              ))}
            </motion.div>
          </div>
        </CartBarStyles>
      )}
    </AnimatePresence>
  );
}
