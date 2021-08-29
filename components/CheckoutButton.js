import styled from 'styled-components';
import Link from 'next/link';
import { Button as ButtonMUI } from '@material-ui/core';
import { useRef, useLayoutEffect } from 'react';
import useComponentSize from '../lib/useComponentSize';

const Button = styled(ButtonMUI)`
  && {
    margin: 1rem 0rem;
    width: 100%;
  }
`;

const CheckoutButtonStyles = styled.div``;

export default function CheckoutButton() {
  const checkoutButtonRef = useRef(null);
  const checkoutButtonSize = useComponentSize(checkoutButtonRef);

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
