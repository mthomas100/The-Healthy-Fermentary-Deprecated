import Link from 'next/link';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Loading from './Loading';
import { useLayout } from '../lib/layoutState';

const HeaderStyles = styled.div`
  /* z-index: 100; */
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: 'Reenie Beanie';
  font-size: 45px;
  background-color: #1d1d1d;
  text-align: center;

  a {
    color: white;
  }
`;

export default function Header() {
  const { productsLeftOffset, checkoutLeftOffset } = useLayout();
  const { pathname } = useRouter();
  return (
    <HeaderStyles pathname={pathname}>
      <Link href="/">
        <a>The Healthy Fermentary</a>
      </Link>
    </HeaderStyles>
  );
}
