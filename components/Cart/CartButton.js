import { AnimatePresence, motion } from 'framer-motion';
import { useCart } from '../../lib/cartState';
import CartIcon from './CartIcon';
import CartIconClose from './CartIconClose';

const variantsClose = {
  initial: {
    opacity: 0,
    transform: 'rotate(0deg)',
  },
  animate: {
    opacity: 1,
    transform: 'rotate(180deg)',
  },
};
const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export default function CartButton() {
  const { cartMobileOpen } = useCart();

  return (
    <>
      {cartMobileOpen ? (
        <AnimatePresence>
          <motion.div
            variants={variantsClose}
            initial="initial"
            animate="animate"
            exit="initial"
            transition={{ duration: 0.3 }}
            className="iconWrapper"
            style={{
              position: 'relative',
            }}
          >
            <CartIconClose />
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          exit="initial"
          transition={{ duration: 0.3 }}
          style={{
            position: 'relative',
            top: '3px',
            transform: 'scale(0.9)',
          }}
        >
          <CartIcon />
        </motion.div>
      )}
    </>
  );
}
