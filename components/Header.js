import Link from 'next/link';
import styled from 'styled-components';
// import Cart from './Cart';
import Nav from './Nav';
// import Search from './Search';

const Logo = styled.div`
  /* This value controls the entire size of the logo*/
  font-size: 2em;
  margin: 0;
  --borderSize: 1em;
  display: flex;
  font-family: 'Reenie Beanie', 'Open Sans';
  /* font-weight: 400; */
  h1 {
    display: grid;
    align-items: center;
    margin: 0;
    grid-row: 2 / span 2;
    grid-gap: 2em;
    /* transform: translateY(0.7em); */
  }

  .letterStyles {
    font-size: 1em;
    letter-spacing: 0.2em;
  }
`;

const HeaderStyles = styled.header`
  padding: 2em;

  .bar {
    /* border-bottom: 10px solid var(--black, black); */
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    /* border-bottom: 1px solid var(--black, black); */
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Some Company</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">{/* <Search /> */}</div>
      {/* <Cart /> */}
    </HeaderStyles>
  );
}
