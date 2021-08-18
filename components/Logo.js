import Link from 'next/link';
import { useEffect } from 'react';
import { GiHeartBottle } from 'react-icons/gi';
import styled from 'styled-components';
import { useWindowSize } from '../lib/useWindowSize';

const LogoStyles = styled.div`
  display: flex;
  width: 100%;
  font-family: 'Reenie Beanie';
  font-size: 45px;

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  /* border: 1px solid blue; */
`;

export default function Logo({ company }) {
  const windowSize = useWindowSize();

  return (
    <LogoStyles windowSize={windowSize} onClick={() => console.log('clicked')}>
      <Link href="/">{company}</Link>
    </LogoStyles>
  );
}
