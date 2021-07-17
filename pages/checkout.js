// import Head from 'next/head';
// import { Normalize } from 'styled-normalize';
import { useEffect, useState } from 'react';
import Checkout from '../components/Checkout';

export default function CheckoutPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false); // this helps

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setIsPageLoaded(true);
    }
  }, [isLoaded]);

  return <Checkout />;
}
