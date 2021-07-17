import styled from 'styled-components';
import { Box } from 'rebass/styled-components';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../lib/cartState';

const CartIconStyles = styled(Box)`
  position: relative;

  .itemCount {
    top: -3px;
    right: 6px;
    position: absolute;
    .bubble {
      position: absolute;
      background-color: tomato;
      width: 13px;
      height: 13px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      ${(props) =>
        props.cartItemTotal >= 10 &&
        `width: 15px;
         height: 15px;
      `};
    }

    .number {
      position: relative;
      top: 0px;
      font-size: 9px;
      line-height: 9px;
      color: white;
    }
  }
`;

export default function CartIcon() {
  const { cartOpen, openCart, closeCart, cartItemTotal } = useCart();

  function cartHandler() {
    if (cartOpen) closeCart();
    if (!cartOpen) openCart();
  }

  return (
    <CartIconStyles
      cartItemTotal={cartItemTotal}
      fontSize={['22px', '22px', '26px', '26px']}
      lineHeight={['22px', '22px', '26px', '26px']}
    >
      {cartItemTotal >= 1 && (
        <div className="itemCount">
          <div className="bubble">
            <div className="number">{cartItemTotal}</div>
          </div>
        </div>
      )}

      <FiShoppingCart onClick={cartHandler} />
    </CartIconStyles>
  );
}
