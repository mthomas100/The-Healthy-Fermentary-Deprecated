import styled from 'styled-components';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import { Divider } from '@material-ui/core';
import { useCart } from '../lib/cartState';
import CartBarItem from './CartBarItem';
import CheckoutButton from './CheckoutButton';
import CartBarHeader from './CartBarHeader';

const CartBarStyles = styled(motion.div)`
  position: absolute;
  top: 20rem;
  right: 4px;
  height: auto;
  min-height: 100vh;
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
    background-color: rgba(255, 255, 255, 1);

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
          variants={variants}
          initial="closed"
          animate="open"
          exit="closed"
          cartItemTotal={cartItemTotal}
          cartOpen={cartOpen}
          cartIsHovering={cartIsHovering}
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
            <CartBarHeader />

            <CheckoutButton />

            {cartContents.map((product, index) => (
              <div key={product.id}>
                <CartBarItem
                  key={product.id}
                  product={product}
                  index={index}
                  cartIsHovering={cartIsHovering}
                />
                <Divider style={{ margin: '0 1rem' }} light />
              </div>
            ))}
          </motion.div>
        </CartBarStyles>
      )}
    </AnimatePresence>
  );
}
