import React, { useEffect } from 'react';
import Shop from '../components/Shop';
import { useCart } from '../lib/cartState';

export default function Home() {
  return (
    <>
      <Shop />
    </>
  );
}
