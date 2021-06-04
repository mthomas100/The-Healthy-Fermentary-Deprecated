import React from 'react';
import Products from '../components/Products';
import { useSize } from '../lib/sizeState';

export default function Home() {
  const { windowSize, productSize } = useSize();
  console.log(productSize);
  return (
    <>
      <div>
        {windowSize.width} x {windowSize.height}
      </div>

      <Products />
    </>
  );
}
