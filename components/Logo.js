import Link from 'next/link';
import { GiHeartBottle } from 'react-icons/gi';
import styled from 'styled-components';

const LogoStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Reenie Beanie';
  font-size: 45px;
`;

export default function Logo({ company }) {
  return (
    <LogoStyles>
      <GiHeartBottle
        style={{
          height: '100%',
          width: 'auto',
          paddingRight: '0.5em',
        }}
      />
      <Link href="/">
        <a>{company}</a>
      </Link>
    </LogoStyles>
  );
}
