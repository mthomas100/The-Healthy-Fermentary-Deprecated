import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import CartBarButton from './CartBarButton';
import CartBarButtonClose from './CartBarButtonClose';
import CartBarMobileStyles from './styles/CartBarMobileStyles';

export default function CartBarMobile() {
  const [isPressed, setIsPressed] = useState(false);

  const variants = {
    cartClosed: {
      transform: 'translateY(-4rem)',
    },
    cartOpen: {
      transform: 'translateY(4rem)',
    },
  };

  return (
    <CartBarMobileStyles>
      <AnimatePresence>
        <motion.div
          onClick={() => setIsPressed((prev) => !prev)}
          style={{ position: 'fixed', bottom: '4rem' }}
          variants={variants}
          animate={isPressed ? 'cartOpen' : 'cartClosed'}
        >
          {isPressed ? (
            <CartBarButton isPressed={isPressed} />
          ) : (
            <CartBarButtonClose isPressed={isPressed} />
          )}
        </motion.div>
      </AnimatePresence>
    </CartBarMobileStyles>
  );
}
