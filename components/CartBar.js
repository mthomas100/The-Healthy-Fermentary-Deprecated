import styled from 'styled-components';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import { Divider } from '@material-ui/core';
import { useCart } from '../lib/cartState';
import CartBarItem from './CartBarItem';
import CheckoutButton from './CheckoutButton';
import CartBarHeader from './CartBarHeader';

const CartBarStyles = styled(motion.div)`
  position: absolute;
  /* display: flex; */
  top: 12rem;
  right: 4px;
  height: auto;
  min-height: 100%;
  width: auto;

  .cartBarWrapper {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    position: sticky;
    top: 0;
    right: 0;
    border-top-left-radius: 2rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 0.5rem;
    padding: 0 1rem;
    overflow: 'hidden';

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
    transform: 'translateZ(0deg)',
    width: 'auto',
    opacity: 1,
  },
  closed: {
    transform: 'translateZ(360deg)',
    width: 'auto',
    opacity: 0,
  },
};

// animate={{ opacity: [0, 1, 0, 1] }}
// transition={{ duration: 5, times: [0, 0.2, 0.3, 1] }}

export default function CartBar() {
  const {
    cartContents,
    cartItemTotal,
    cartOpen,
    cartIsHovering,
    setCartIsHovering,
  } = useCart();

  return (
    <AnimatePresence before>
      {cartOpen && cartContents.length > 0 && (
        <CartBarStyles
          className="carBarStyledComponent"
          variants={variantsShrink}
          initial="closed"
          animate="open"
          exit="closed"
          cartItemTotal={cartItemTotal}
          cartOpen={cartOpen}
          cartIsHovering={cartIsHovering}
          onAnimationComplete={() => console.log('animation complete')} // TODO: set some state/css that allows INNER contents to be visible when complete
        >
          <div
            className="cartBarWrapper"
            onMouseLeave={(e) => {
              e.stopPropagation();
              setCartIsHovering(false);
            }}
            onMouseEnter={(e) => {
              e.stopPropagation();
              setCartIsHovering(true);
            }}
          >
            <motion.div className="cartBar">
              <CartBarHeader />

              <CheckoutButton />

              {cartContents.map((product, index) => (
                <>
                  <CartBarItem
                    key={product.id}
                    product={product}
                    index={index}
                    cartIsHovering={cartIsHovering}
                  />
                  <Divider style={{ margin: '0 1rem' }} light />
                </>
              ))}
            </motion.div>
          </div>
        </CartBarStyles>
      )}
    </AnimatePresence>
  );
}
