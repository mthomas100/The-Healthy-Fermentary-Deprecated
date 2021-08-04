import styled from 'styled-components';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import { Divider } from '@material-ui/core';
import { useState } from 'react';
import { useCart } from '../lib/cartState';
import CartBarItem from './CartBarItem';
import CheckoutButton from './CheckoutButton';
import CartBarHeader from './CartBarHeader';
import CartBarContents from './CartBarContents';
import CartIcon from './CartIcon';
import CartIconClosed from './CartIconClosed';

const CartBarMobileStyles = styled(motion.div)`
  position: absolute;
  top: 28rem;
  right: 4px;
  min-height: 100%;
  width: auto;

  .cartBarWrapper {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    position: fixed;
    bottom: 15vh;
    right: 2rem;
    padding: 0 1rem;
    overflow: 'hidden';
    background-color: rgba(255, 255, 255, 1);
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    transform: rotate
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  .cartIconWrapper {
    position: absolute;
    top: 12px;
    left: 9px;
    transform: scale(0.9);
  }
  .cartIconClosedWrapper {
    position: absolute;
    top: 10px;
    left: 10px;
    transform: scale(0.9);
  }
`;

const variants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  closed: {
    opacity: 0,
  },
};

const CartMobileComponentSM = styled(motion.div)``;

const variantsSM = {
  initial: {
    transform: 'translateY(0deg)',
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 10,
    },
  },
  pressed: {
    transform: 'translateY(2rem)',
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 10,
    },
  },
};

export default function CartBarMobile() {
  const { cartItemTotal, cartOpen, cartIsHovering, setCartIsHovering } =
    useCart();
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <CartBarMobileStyles
        className="carBarStyledComponent"
        cartItemTotal={cartItemTotal}
        cartOpen={cartOpen}
        cartIsHovering={cartIsHovering}
        onAnimationComplete={() => console.log('animation complete')} // TODO: set some state/css that allows INNER contents to be visible when complete
      >
        <motion.div
          className="cartBarWrapper"
          variants={variantsSM}
          animate={isPressed ? 'pressed' : 'initial'}
          transition={{ duration: 0.1 }}
          onClick={() => setIsPressed((prev) => !prev)}
          onMouseLeave={(e) => {
            e.stopPropagation();
            setCartIsHovering(false);
          }}
          onMouseEnter={(e) => {
            e.stopPropagation();
            setCartIsHovering(true);
          }}
          /* animate={{
              backgroundColor: `${
                cartIsHovering
                  ? 'rgba(255, 255, 255, 0.5)'
                  : 'rgba(255, 255, 255, 0.2)'
              }`,
            }} */
          transition={{ duration: 2 }}
        >
          <AnimatePresence>
            {isPressed ? (
              <div className="cartIconWrapper">
                <CartIcon />
              </div>
            ) : (
              <div className="cartIconClosedWrapper">
                <CartIconClosed />
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </CartBarMobileStyles>
    </>
  );
}
