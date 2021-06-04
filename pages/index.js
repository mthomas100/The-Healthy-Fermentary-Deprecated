import React from 'react';
import styled from 'styled-components';
import Cart from '../components/Cart';
import Products from '../components/Products';
import { useCart } from '../lib/cartState';
import { useSize } from '../lib/sizeState';

export default function Home() {
  const { cartOpen } = useCart();
  const { sideSpaceSize } = useSize();

  const ShopStyles = styled.div``;
  // console.log(sideSpaceSize?.width > 500);

  return (
    <ShopStyles>
      {/* CART OPEN, SIDESPACE > 500px */}
      {cartOpen && sideSpaceSize?.width > 500 && (
        <>
          <Products />
          <Cart />
        </>
      )}
      {/* CART OPEN, SIDESPACE < 500px */}
      {cartOpen && sideSpaceSize?.width < 500 && <Cart />}
      {/* CART CLOSED */}
      {!cartOpen && <Products />}
    </ShopStyles>
  );
}
