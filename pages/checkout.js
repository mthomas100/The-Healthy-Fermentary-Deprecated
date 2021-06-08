import Head from 'next/head';
import { Normalize } from 'styled-normalize';
import MaterialLayout from '../components/Layout/MaterialLayout';
import CheckoutPage from '../components/CheckoutPage/CheckoutPage';

export default function Checkout() {
  return (
    <>
      {/* <Normalize /> */}
      <MaterialLayout>
        <CheckoutPage />
      </MaterialLayout>
    </>
  );
}
