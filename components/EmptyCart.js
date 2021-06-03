import styled from 'styled-components';
import { useCart } from '../lib/cartState';

export default function EmptyCart({ id }) {
  const { emptyCart } = useCart();

  const EmptyCartStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 40px;
    color: red;
    border: 3px solid gray;
    margin: 0 5px;
  `;

  function handleEmptyCart() {
    emptyCart();
  }

  return (
    <EmptyCartStyles onClick={handleEmptyCart}>Empty Cart</EmptyCartStyles>
  );
}
