import { AnimatePresence, motion } from 'framer-motion';
import { useCart } from '../lib/cartState';
import CartButton from './CartButton';
import CartMobileStyles from './styles/CartMobileStyles';

export default function CartMobile() {
  const { toggleCartMobile, cartMobileOpen } = useCart();

  const variants = {
    cartClosed: {
      transform: 'translateY(-4rem)',
    },
    cartOpen: {
      transform: 'translateY(4rem)',
    },
  };

  return (
    <CartMobileStyles>
      <AnimatePresence>
        <motion.div
          onClick={() => toggleCartMobile()}
          style={{ position: 'fixed', bottom: '4rem' }}
          variants={variants}
          animate={cartMobileOpen ? 'cartOpen' : 'cartClosed'}
          transform={{ duration: 3 }}
        >
          <CartButton />
        </motion.div>
      </AnimatePresence>
    </CartMobileStyles>
  );
}

// cart open is a thing in mobile, but not in desktop
// desktop is automatic and
// idea to make cart bubble draggable
