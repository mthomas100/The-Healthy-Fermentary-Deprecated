import { motion } from 'framer-motion';
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
`;

export default function CartMobile() {
  const { toggleCartMobile, cartMobileOpen } = useCart();

  const mobileCartOpen = true;

  return (
    <CartMobileStyles>
      <CartController />
      {/* {mobileCartOpen && (
        <div
          className="mobileCart"
          style={{ position: 'absolute', bottom: 0, right: 1 }}
        >
          mobile cart
        </div>
      )} */}
    </CartMobileStyles>
  );
}

// cart open is a thing in mobile, but not in desktop
// desktop is automatic and
// idea to make cart bubble draggable
