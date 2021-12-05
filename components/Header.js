import Link from 'next/link';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Loading from './Loading';

const HeaderStyles = styled.div`
  /* z-index: 100; */
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: 'Reenie Beanie';
  font-weight: bold;
  font-size: 70px;
  letter-spacing: 1rem;
  background-color: #000000;
  text-align: center;
  padding: 3rem 0;

  a {
    color: #ffffff;
  }
`;

export default function Header() {
  const { pathname } = useRouter();
  return (
    <HeaderStyles pathname={pathname}>
      <Link href="/">
        <a>The Healthy Fermentary</a>
      </Link>
    </HeaderStyles>
  );
}
