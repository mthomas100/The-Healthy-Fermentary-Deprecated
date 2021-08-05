import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { useCart } from '../lib/cartState';
// import CartMobileStyles from './styles/CartMobileStyles';
import CartController from './CartController';

const CartMobileStyles = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;

  & * {
    pointer-events: all;
  }

  .mobileCart {
    position: absolute;
    z-index: 2;
    border: 5px solid #808080a2;
    border-radius: 2rem;
    margin: 1rem;
    background-color: #80808036;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export default function CartMobile() {
  const { toggleCartMobile, cartMobileOpen } = useCart();

  const variants = {
    animate: {
      /* eslint-disable */
      transform: `
      rotate(${cartMobileOpen ? '0deg' : '25deg'})
      translateX(${cartMobileOpen ? '0%' : '-150%'}) 
      `,
      /* eslint-enable */
    },
    transitionIn: {
      type: 'spring',
      duration: 1.15,
    },
    transitionOut: {
      ease: 'easeIn',
      duration: 0.5,
    },
    // transitionIn: { type: 'spring' },
    // transitionOut: {
    //   ease: `${cartMobileOpen ? 'easeOut' : 'easeIn'}`,
    //   duration: 0.5,
    // },
  };

  return (
    <CartMobileStyles>
      <CartController />
      {/* TODO: animate presence to the left ease in on cart is open(?) */}

      <motion.h1
        variants={variants}
        animate="animate"
        className="mobileCart"
        transition={
          cartMobileOpen ? variants.transitionIn : variants.transitionOut
        }
      />
    </CartMobileStyles>
  );
}

// cart open is a thing in mobile, but not in desktop
// desktop is automatic and
// idea to make cart bubble draggable
