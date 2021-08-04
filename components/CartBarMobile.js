import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import CartBarButton from './CartBarButton';
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
          transform={{ duration: 3 }}
        >
          <CartBarButton isPressed={isPressed} />
        </motion.div>
      </AnimatePresence>
    </CartBarMobileStyles>
  );
}

// cart open is a thing in mobile, but not in desktop
// desktop is automatic and
