import styled from 'styled-components';
import { Box } from 'rebass/styled-components';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../../lib/cartState';

const CartIconStyles = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .itemCount {
    top: -7px;
    left: 8px;
    position: relative;
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
  const { cartItemTotal } = useCart();

  return (
    <CartIconStyles
      cartItemTotal={cartItemTotal}
      fontSize="30px"
      lineHeight="30px"
    >
      {cartItemTotal >= 1 && (
        <div className="itemCount">
          <div className="bubble">
            <div className="number">{cartItemTotal}</div>
          </div>
        </div>
      )}

      <FiShoppingCart />
    </CartIconStyles>
  );
}
