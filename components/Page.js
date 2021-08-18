import styled, { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
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

function Page({ children }) {
  const { pathname } = useRouter();
  console.log({ pathname });
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
            {pathname !== '/checkout' &&
              (windowSize.width >= 700 ? <CartBar /> : <CartMobile />)}
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
