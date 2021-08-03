import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';
import CartBar from './CartBar';

import { useWindowSize } from '../lib/useWindowSize';
import CartBarMobile from './CartBarMobile';

// TODO: assign a global programmable value to color pattern background
// TODO: create optional background insertable objects via backend

const OuterWrapperStyles = styled.div`
  /* background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(3) rotate(35)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,0%,1)'/><path d='M10-10L20 0v10L10 0zM20 0L10-10V0l10 10zm0 10L10 0v10l10 10zm0 10L10 10v10l10 10zM0 20l10-10v10L0 30zm0-10L10 0v10L0 20zM0 0l10-10V0L0 10z'  stroke-width='4' stroke='hsla(221,50.6%,15.9%,1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>"); */
  position: relative;
  z-index: 0;
  width: 100%;
  /* background-image: url('https://images.unsplash.com/photo-1626080308347-a806a7c0570b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3334&q=80'); */
  /* background-image: url('https://images.unsplash.com/photo-1624514134741-a3035dfcabb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'); */
  background-size: 400%;
  padding: 4rem 1rem;

  &:before {
    content: '';
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
    filter: blur(0px);
  }
`;

const ContentStyles = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  height: auto;
  padding: 4rem 12rem;
  box-shadow: 0 40px 40px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  position: relative;
  /* overflow: hidden; */
  /* background: rgba(255, 255, 255, 0.5); */
  background-color: #efeee9cf;

  &:before {
    content: '';
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, 1);
    filter: blur(10px);
    /* margin: -20px; */
  }
`;

function Page({ children }) {
  const windowSize = useWindowSize();
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ThemeProvider theme={theme}>
        {/* <TopImage /> */}
        <OuterWrapperStyles>
          <ContentStyles>
            <Header />
            {children}
            {windowSize.width >= 700 ? <CartBar /> : <CartBarMobile />}
          </ContentStyles>
        </OuterWrapperStyles>
      </ThemeProvider>
    </>
  );
}

// export const getServerSideProps = async ({ req }) => {
//   const session = await getSession({ req });
//   console.log({ session });

//   return {
//     props: {
//       session,
//     },
//   };
// };

export default Page;
