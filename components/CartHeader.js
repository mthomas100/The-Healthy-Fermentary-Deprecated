import styled from 'styled-components';
import { useRef, useLayoutEffect } from 'react';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';
import CartIcon from './CartIcon';
import useComponentSize from '../lib/useComponentSize';
import { useLayout } from '../lib/layoutState';

const CartHeaderStyles = styled.div`
  .cartIconWrapper {
    padding-top: 4rem;
    margin-bottom: 2rem;
    font-family: 'Nunito';
  }

  .cartDetails {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .itemCount {
      font-size: 1.4rem;
      letter-spacing: 0.1rem;
      font-family: 'Nunito';
      margin: 0 auto;
    }

    .totalValue {
      font-weight: 800;
      white-space: nowrap;
      margin: 0.5rem auto 2rem auto;
      font-size: 1.4rem;
      font-family: 'Nunito';
      color: #af1313;
    }
  }
`;

export default function CartHeader() {
  const cartHeaderRef = useRef(null);
  const cartHeaderSize = useComponentSize(cartHeaderRef);
  const { openCart, cartItemTotal, cartContents } = useCart();
  const { setCartHeaderSize } = useLayout();

  useLayoutEffect(() => {
    setCartHeaderSize(cartHeaderSize.height);
  }, [cartHeaderSize, cartItemTotal]);

  return (
    <CartHeaderStyles ref={cartHeaderRef}>
      <div className="cartIconWrapper">
        <CartIcon onClick={openCart} />
      </div>

      <div className="cartDetails">
        <div className="itemCount">{cartItemTotal} items</div>

        <div className="totalValue">
          <b>$</b> {calcTotalPrice(cartContents)}
        </div>
      </div>
    </CartHeaderStyles>
  );
}
