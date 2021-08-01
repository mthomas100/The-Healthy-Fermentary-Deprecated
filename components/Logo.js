import Link from 'next/link';
import { useEffect } from 'react';
import { GiHeartBottle } from 'react-icons/gi';
import styled from 'styled-components';
import { useWindowSize } from '../lib/useWindowSize';

const LogoStyles = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: ${(props) =>
    props.windowSize.width >= 900 ? 'left' : 'center'};
  align-items: center;
  font-family: 'Reenie Beanie';
  font-size: 45px;

  a {
    white-space: nowrap;
  }

  /* border: 1px solid blue; */
`;

export default function Logo({ company }) {
  const windowSize = useWindowSize();

  return (
    <LogoStyles windowSize={windowSize}>
      <GiHeartBottle
        style={{
          height: '100%',
          width: 'auto',
          marginRight: '0.5em',
        }}
      />
      <Link href="/">
        <a>{company}</a>
      </Link>
    </LogoStyles>
  );
}
