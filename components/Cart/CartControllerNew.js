import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import CheckoutButton from '../CheckoutButton';
import CartHeader from './CartHeader';
import CartContents from './CartContents';
import { useWindowSize } from '../../lib/useWindowSize';
import { useCart } from '../../lib/cartState';
import { useLayout } from '../../lib/layoutState';

const CartBarStyles = styled(motion.div)`
  position: absolute;
  top: ${(props) =>
    `${props.cartOffset}px`}; // Minimum amount of space between the top of the screen and the top of the cart bar
  right: 4px;
  min-height: calc(100% - ${(props) => props.cartOffset}px);
  width: auto;

  .cartBarWrapper {
    position: sticky;
    top: 0rem; // Amount of space from top of screen once section is scrolled to
    /* bottom: 10px; */
  }

  .cartBar {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    border-top-left-radius: 2rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 0.5rem;
    min-height: ${(props) => props.cartBarSizeMinimum}px;
    max-height: calc(${(props) => props.windowHeight}px - 20rem);
    padding: 0 1rem;
    overflow-y: ${(props) => (props.cartIsHovering ? 'scroll' : 'hidden')};
    overflow-x: hidden;
    background-color: rgba(255, 255, 255, 1);
    // TODO: props based paddding with adjustment (if not done in FM) */

    &:before {
      content: '';
      position: relative;
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
  const { cartItemTotal, cartOpen, cartIsHovering, setCartIsHovering } =
    useCart();

  const { height: windowHeight } = useWindowSize();
  const { cartOffset } = useLayout();

  console.log({ cartOpen });

  return (
    <AnimatePresence before>
      {cartOpen && (
        <CartBarStyles
          windowHeight={windowHeight}
          className="carBarStyledComponent"
          variants={variants}
          initial="closed"
          animate="open"
          exit="closed"
          cartItemTotal={cartItemTotal}
          cartOpen={cartOpen}
          cartIsHovering={cartIsHovering}
          cartOffset={cartOffset}
        >
          <div className="cartBarWrapper">
            <motion.div
              className="cartBar"
              onMouseLeave={(e) => {
                e.stopPropagation();
                setCartIsHovering(false);
              }}
              onMouseEnter={(e) => {
                e.stopPropagation();
                setCartIsHovering(true);
              }}
              transition={{ duration: 2 }}
            >
              <CartHeader />

              <CheckoutButton />

              <CartContents />
            </motion.div>
          </div>
        </CartBarStyles>
      )}
    </AnimatePresence>
  );
}
