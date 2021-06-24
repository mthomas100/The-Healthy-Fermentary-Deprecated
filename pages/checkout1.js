import Head from 'next/head';
import { Normalize } from 'styled-normalize';
import MaterialLayout from '../components/Layout/MaterialLayout';
import CheckoutPage from '../components/CheckoutPage/CheckoutPage';
import PaymentForm from '../components/CheckoutPage/Forms/PaymentForm';

export default function Checkout() {
  return (
    <>
      <MaterialLayout>
        <CheckoutPage />
      </MaterialLayout>
    </>
  );
}
