import { motion } from 'framer-motion';
import styled from 'styled-components';
import CartIcon from './CartIcon';

const CartBarButtonCloseStyles = styled.div`
  .cartBarWrapper {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    position: fixed;
    bottom: 15vh;
    right: 2rem;
    overflow: 'hidden';
    background-color: rgba(255, 255, 255, 1);
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  .cartIconWrapper {
    position: absolute;
    top: 12px;
    left: 9px;
    transform: scale(0.9);
  }
`;

export default function CartBarButtonClose() {
  return (
    <CartBarButtonCloseStyles>
      <div className="cartBarWrapper">
        <motion.div className="cartIconWrapper">
          <CartIcon />
        </motion.div>
      </div>
    </CartBarButtonCloseStyles>
  );
}
