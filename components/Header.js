import styled from 'styled-components';
import Logo from './Logo';

const HeaderStyles = styled.div`
  /* padding: 2rem; */
`;

export default function Header() {
  return (
    <HeaderStyles>
      <Logo />
    </HeaderStyles>
  );
}
