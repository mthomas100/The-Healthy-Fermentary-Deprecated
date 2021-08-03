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

    .cartIconWrapper {
      position: absolute;
      top: 12px;
      left: 9px;
      transform: scale(0.9);
    }
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

const variantsButton = {
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

export default function CartBarMobile() {
  const { cartItemTotal, cartOpen, cartIsHovering, setCartIsHovering } =
    useCart();
  const [isPressed, setIsPressed] = useState(false);
  const active = true;

  // 1) circle around cart IN flow (just this if not active, always)
  // 2) remove circle, animate in the other components needed (within same div)
  // OR 2b) full screen view of cart
  // 2) ++ make overflow hidden and original cart

  return (
    <AnimatePresence before>
      {/* {cartOpen && cartContents.length > 0 && ( */}
      {active && (
        <CartBarMobileStyles
          className="carBarStyledComponent"
          cartItemTotal={cartItemTotal}
          cartOpen={cartOpen}
          onAnimationComplete={() => console.log('animation complete')} // TODO: set some state/css that allows INNER contents to be visible when complete
        >
          <motion.div
            className="cartBarWrapper"
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
            <motion.div
              className="cartIconWrapper"
              variants={variantsButton}
              animate={isPressed ? 'pressed' : 'initial'}
            >
              <CartIcon />
            </motion.div>
          </motion.div>
        </CartBarMobileStyles>
      )}
    </AnimatePresence>
  );
}
