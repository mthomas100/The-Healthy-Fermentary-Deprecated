import styled from 'styled-components';
import Link from 'next/link';
import { Button as ButtonMUI } from '@material-ui/core';

const Button = styled(ButtonMUI)`
  && {
    margin: 1rem 0rem;
    width: 100%;
  }
`;

export default function CheckoutButton() {
  return (
    <Link href="/checkout" passHref>
      <Button variant="outlined" size="large">
        Checkout
      </Button>
    </Link>
  );
}
