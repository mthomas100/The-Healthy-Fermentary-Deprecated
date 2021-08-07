import { motion } from 'framer-motion';
import styled from 'styled-components';

const CartPaneStyles = styled(motion.h1)`
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
`;

export default function CartPane() {
  return <CartPaneStyles />;
}
