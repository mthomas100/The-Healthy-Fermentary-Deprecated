import { Button } from 'rebass/styled-components';
import styled from 'styled-components';
import { useCart } from '../lib/cartState';

export default function RemoveFromCartButton(product) {
  const { openCart, removeFromCart } = useCart();

  const RemoveFromCartButtonStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 40px;
    color: red;
  `;

  function handleRemoveFromCart() {
    openCart();
    removeFromCart(product);
  }

  return (
    <RemoveFromCartButtonStyles onClick={handleRemoveFromCart}>
      &times;
    </RemoveFromCartButtonStyles>
  );
}
