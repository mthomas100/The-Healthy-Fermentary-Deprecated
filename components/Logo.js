import Link from 'next/link';
import { GiHeartBottle } from 'react-icons/gi';
import styled from 'styled-components';

const LogoStyles = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  font-family: 'Reenie Beanie';
  font-size: 45px;
  /* border: 1px solid blue; */
`;

export default function Logo({ company }) {
  return (
    <LogoStyles>
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
