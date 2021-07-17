import React from 'react';
import styled from 'styled-components';
import Cart from '../components/Cart';
import Shop from '../components/Shop';
import { useCart } from '../lib/cartState';
import { useSize } from '../lib/sizeState';

const ShopStyles = styled.div`
  /* width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around; */
`;

export default function Home() {
  return (
    <>
      <Shop />
    </>
  );
}
