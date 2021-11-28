import styled, { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import { isMobile } from 'react-device-detect';
import Head from 'next/head';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';
import CartBar from './Cart/CartBar';
import { useWindowSize } from '../lib/useWindowSize';
import CartMobile from './Cart/CartMobile';

// TODO: assign a global programmable value to color pattern background
// TODO: create optional background insertable objects via backend

const OuterWrapperStyles = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  background-size: 400%;
  padding: 2rem 1rem;
  background-color: #fff0c345;

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
  padding: 0rem 0rem;
  box-shadow: 0 40px 40px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  position: relative;
  /* background-color: #efeee9cf; */
  background-color: #f7f7f7a4;

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
  }
`;

function Page({ children }) {
  const { pathname } = useRouter();
  const windowSize = useWindowSize();

  return (
    <>
      <Head>
        <title>The Healthy Fermentary</title>
      </Head>
      <GlobalStyles />
      <Typography />
      <ThemeProvider theme={theme}>
        <OuterWrapperStyles>
          <ContentStyles>
            {/* <Header /> */}
            {/* <HeaderNew /> */}

            {children}
            {pathname !== '/checkout' &&
              (isMobile || windowSize.width <= 700 ? (
                <CartMobile />
              ) : (
                <CartBar />
              ))}
          </ContentStyles>
        </OuterWrapperStyles>
      </ThemeProvider>
    </>
  );
}

export default Page;
