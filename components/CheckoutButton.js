import styled from 'styled-components';
import Link from 'next/link';
import { Button as ButtonMUI } from '@material-ui/core';
import { useRef } from 'react';
import { useCart } from '../lib/cartState';

const Button = styled(ButtonMUI)`
  && {
    margin: 1rem 0rem;
    width: 100%;
  }
`;

const CheckoutButtonStyles = styled.div``;

export default function CheckoutButton() {
  const checkoutButtonRef = useRef(null);

  return (
    <CheckoutButtonStyles ref={checkoutButtonRef}>
      <Link href="/checkout" passHref>
        <Button variant="outlined" size="large">
          Checkout
        </Button>
      </Link>
    </CheckoutButtonStyles>
  );
}
