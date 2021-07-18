import Link from 'next/link';
import { GiHeartBottle } from 'react-icons/gi';
import styled from 'styled-components';

const LogoStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Reenie Beanie';
  /* font-size: 26px;
  line-height: 26px; */
  font-size: 36px;
  padding-bottom: 2rem;
`;

export default function Logo() {
  return (
    <LogoStyles>
      <GiHeartBottle
        style={{
          height: '100%',
          width: 'auto',
          paddingRight: '0.5em',
        }}
      />
      <Link href="/">Sa-Cha</Link>
    </LogoStyles>
  );
}
