import styled from 'styled-components';
import { useCart } from '../lib/cartState';

export default function RemoveFromCartButton({ id }) {
  const { removeFromCart } = useCart();

  const RemoveFromCartButtonStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 40px;
    color: red;
  `;

  function handleRemoveFromCart() {
    removeFromCart(id);
  }

  return (
    <RemoveFromCartButtonStyles onClick={handleRemoveFromCart}>
      &times;
    </RemoveFromCartButtonStyles>
  );
}
