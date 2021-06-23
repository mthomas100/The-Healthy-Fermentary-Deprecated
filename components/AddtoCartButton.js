import { CartAdd } from '@styled-icons/boxicons-solid/CartAdd';
import styled from 'styled-components';
// import { Button } from 'rebass/styled-components';
import { useCart } from '../lib/cartState';

const ButtonStyles = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  border: 0.5px solid #00000034;
  /* border-radius: 5px; */
  padding-left: 1.6rem;
  /* padding: 2px; */
  /* margin-left: 2rem; */
  background-color: #ffffff;
  /* width: 100%; */

  .circle {
    height: 1.5rem;
    width: auto;
  }

  .text {
    font-size: 1.5rem;
    margin-left: 0.8rem;
  }
`;

export default function AddtoCartButton(product) {
  const { openCart, addToCart } = useCart();

  function handleAddToCart() {
    // add to cart animation (always)
    // 1) the button animates
    // 2) the shopping cart items red circle number updates
    // if the screen is big enough, openCart as sidebar
    // (if screen is too small don't)
    openCart();
    addToCart(product);
  }

  return (
    <ButtonStyles onClick={handleAddToCart}>
      <CartAdd className="circle" />
      <div className="text">Add to Cart</div>
    </ButtonStyles>
  );
}
