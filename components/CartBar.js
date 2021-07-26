import styled from 'styled-components';
import { Button as ButtonMUI } from '@material-ui/core';
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
    padding: 0 1rem;
    // TODO: props based paddding with adjustment (if not done in FM) */

    &:before {
      content: '';
      position: absolute;
      background: inherit;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
      filter: blur(5px);
      border-top-left-radius: 2rem;
      border-top-right-radius: 0.5rem;
      border-bottom-left-radius: 2rem;
      border-bottom-right-radius: 0.5rem;
    }
  }

  .cartBar {
    align-self: flex-start;
    background-color: #ffffff;
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
`;

const Button = styled(ButtonMUI)`
  && {
    margin: 1rem 0rem;
    width: 100%;
  }
`;

const variantsFade = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.2,
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
      delay: 0.4,
    },
  },
};

export default function CartBar() {
  const {
    cartContents,
    cartItemTotal,
    openCart,
    cartOpen,
    cartIsHovering,
    setCartIsHovering,
  } = useCart();

  // const CartBarRef = useRef(null);

  return (
    <AnimatePresence before>
      {cartOpen && cartContents.length > 0 && (
        // this
        <CartBarStyles
          variants={variantsShrink}
          initial="closed"
          animate="open"
          exit="closed"
          cartItemTotal={cartItemTotal}
          cartOpen={cartOpen}
          cartIsHovering={cartIsHovering}
        >
          <div className="cartBarWrapper">
            <motion.div
              className="cartBar"
              variants={variantsFade}
              initial="closed"
              animate="open"
              exit="closed"
              onMouseLeave={() => setCartIsHovering(false)}
              onMouseEnter={() => setCartIsHovering(true)}
              onMouseOver={() => setCartIsHovering(true)}
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

                  <Link href="/checkout" passHref>
                    <Button variant="outlined" size="large">
                      Checkout
                    </Button>
                  </Link>
                </>
              )}

              {cartContents.map((product, index) => (
                <CartBarItem
                  key={product.id}
                  product={product}
                  index={index}
                  cartIsHovering={cartIsHovering}
                />
              ))}
            </motion.div>
          </div>
        </CartBarStyles>
      )}
    </AnimatePresence>
  );
}
