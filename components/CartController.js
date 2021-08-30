import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useCart } from '../lib/cartState';
import CartButton from './CartButton';

const variants = {
  cartClosed: {
    transform: 'translateY(-4rem)',
  },
  cartOpen: {
    transform: 'translateY(4rem)',
  },
};

const CartControllerStyles = styled.div`
  position: absolute;
  right: 2rem;
  top: 24rem;

  .cartIconWrapper {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    position: sticky;
    top: 4rem;
    z-index: 30;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* overflow: hidden; */
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

export default function CartController() {
  const { toggleCartMobile, cartMobileOpen } = useCart();
  return (
    <CartControllerStyles>
      <AnimatePresence>
        <motion.div
          className="cartIconWrapper"
          onClick={() => toggleCartMobile()}
          variants={variants}
          animate={cartMobileOpen ? 'cartOpen' : 'cartClosed'}
          transition={{ type: 'spring', bounce: 0.25 }}
        >
          <CartButton />
        </motion.div>
      </AnimatePresence>
    </CartControllerStyles>
  );
}
