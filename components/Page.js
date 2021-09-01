import styled, { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import { isMobile } from 'react-device-detect';
import { Typography as TypographyMUI } from '@material-ui/core';
import theme from './styles/theme';
import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';
import CartBar from './CartBar';
import { useWindowSize } from '../lib/useWindowSize';
import CartMobile from './CartMobile';

// TODO: assign a global programmable value to color pattern background
// TODO: create optional background insertable objects via backend

const OuterWrapperStyles = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  background-size: 400%;
  padding: 2rem 1rem;
  background-color: beige;

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
  }
`;

const UnderConstruction = styled.div`
  height: auto;
  border-top: solid 4px;
  border-bottom: solid 4px;
  background-color: yellow;
  border-image: repeating-linear-gradient(
      -75deg,
      yellow,
      yellow 10px,
      black 10px,
      black 20px
    )
    20;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  text-align: center;

  .text {
    text-align: center;
    padding: 2rem;
  }
`;

function Page({ children }) {
  const { pathname } = useRouter();
  const windowSize = useWindowSize();

  return (
    <>
      <GlobalStyles />
      <Typography />
      <ThemeProvider theme={theme}>
        {/* <TopImage /> */}
        <OuterWrapperStyles>
          <ContentStyles>
            <UnderConstruction>
              <TypographyMUI variant="h6">
                Pardon the mess. This website is currently under construction.
              </TypographyMUI>
            </UnderConstruction>
            <Header />

            {children}
            {pathname !== '/checkout' && (
              // (isMobile || windowSize.width <= 700 ? (
              //   <CartMobile />
              // ) : (
              //   <CartBar />
              // ))
              <CartMobile />
            )}
          </ContentStyles>
        </OuterWrapperStyles>
      </ThemeProvider>
    </>
  );
}

export default Page;
