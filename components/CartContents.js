import { Divider } from '@material-ui/core';
import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { useCart } from '../lib/cartState';
import CartItem from './CartItem';
import useComponentSize from '../lib/useComponentSize';
import { useLayout } from '../lib/layoutState';

const CartContentsStyles = styled.div`
  .cartEmpty {
    background-color: red;
  }
`;

export default function CartContents({ view }) {
  const cartContentsRef = useRef(null);

  const { cartContents, cartIsHovering } = useCart();
  const { setCartContentsSize } = useLayout();

  const cartContentsSize = useComponentSize(cartContentsRef, cartContents);

  useLayoutEffect(() => {
    setCartContentsSize(cartContentsSize.height);
  }, [cartContentsSize]);

  if (cartContents.length > 0) {
    return (
      <CartContentsStyles ref={cartContentsRef}>
        {cartContents.map((product, index) => (
          <div className="cartItemWrapper" key={product.id}>
            <CartItem
              key={product.id}
              product={product}
              index={index}
              cartIsHovering={view === 'mobile' || cartIsHovering}
            />
            <Divider style={{ margin: '0 1rem' }} light />
          </div>
        ))}
      </CartContentsStyles>
    );
  }
  return null;
  // TODO: say something like "No items in cart currently"
}
