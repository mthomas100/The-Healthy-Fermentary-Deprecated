import { CartAdd } from '@styled-icons/boxicons-solid/CartAdd';

import styled from 'styled-components';
// import { Button } from 'rebass/styled-components';
import { useCart } from '../lib/cartState';

const ButtonStyles = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 2rem;
  border: none;
  font-family: 'Nunito';
  justify-content: space-between;
  color: #0a0a0ae4;
  transition: 1s all;
  opacity: ${(props) => (props.mouseIsOver ? '1' : '0')};

  .price {
    align-self: flex-start;
    /* justify-self: flex-start; */
    margin: 0 auto;
    font-size: 2rem;
  }

  .cartAdd {
    height: 3rem;
    width: auto;
    opacity: 0.7;
    align-self: flex-end;
    margin: 0 auto;
  }

  .cartAdd:hover {
    color: #00000039;
  }
`;

export default function AddtoCartButton({ product, mouseIsOver }) {
  const { openCart, addToCart } = useCart();

  return (
    <ButtonStyles mouseIsOver={mouseIsOver}>
      <CartAdd className="cartAdd" />
    </ButtonStyles>
  );
}
