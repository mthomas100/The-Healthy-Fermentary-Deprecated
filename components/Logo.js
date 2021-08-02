import Link from 'next/link';
import { useEffect } from 'react';
import { GiHeartBottle } from 'react-icons/gi';
import styled from 'styled-components';
import { useLayout } from '../lib/layoutState';
import { useWindowSize } from '../lib/useWindowSize';

const LogoStyles = styled.div`
  display: flex;
  width: ${({ windowSize, headerParentOffsetLeft }) =>
    windowSize.width >= 900
      ? `calc(100% - ${headerParentOffsetLeft}px`
      : '100%'};
  position: relative;
  left: ${(props) =>
    props.windowSize.width >= 900 ? `${props.headerParentOffsetLeft}px` : 0};
  justify-content: ${(props) =>
    props.windowSize.width >= 900 ? 'left' : 'center'};
  flex-direction: row;
  align-items: center;
  font-family: 'Reenie Beanie';
  font-size: 45px;

  a {
    white-space: nowrap;
  }

  /* border: 1px solid blue; */
`;

export default function Logo({ company }) {
  const { headerParentOffsetLeft } = useLayout();
  const windowSize = useWindowSize();
  return (
    <LogoStyles
      headerParentOffsetLeft={headerParentOffsetLeft}
      windowSize={windowSize}
    >
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
