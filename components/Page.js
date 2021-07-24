import styled, { ThemeProvider } from 'styled-components';
import { Box, Flex } from 'rebass/styled-components';
import theme from './styles/theme';
import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';
import Cart from './Cart';
import { useCart } from '../lib/cartState';
import CartIcon from './CartIcon';
import CartBar from './CartBar';
import TopImage from './TopImage';

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;
// TODO: assign a global programmable value to color pattern background
// TODO: create optional background insertable objects via backend

const OuterWrapperStyles = styled.div`
  /* background-color: #fed624; */
  /* background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(3) rotate(35)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,0%,1)'/><path d='M10-10L20 0v10L10 0zM20 0L10-10V0l10 10zm0 10L10 0v10l10 10zm0 10L10 10v10l10 10zM0 20l10-10v10L0 30zm0-10L10 0v10L0 20zM0 0l10-10V0L0 10z'  stroke-width='4' stroke='hsla(221,50.6%,15.9%,1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>"); */
  position: relative;
  z-index: 0;
  padding: 0rem;
  width: 100%;
`;

const ContentStyles = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  padding: 0rem 0rem 4rem 0rem;
  background: linear-gradient(
    -45deg,
    #ee7752f0,
    #e73c7ef0,
    #23a6d5f0,
    #23d5abf0
  );
  background-size: 400% 400%;
  animation: gradient 0s ease infinite;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* border-radius: 4rem; */
  position: relative;
  overflow: hidden;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .inner {
    position: relative;
  }
`;

function Page({ children }) {
  console.log(ContentStyles);
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ThemeProvider theme={theme}>
        {/* <TopImage /> */}
        <Layout>
          <OuterWrapperStyles>
            <ContentStyles>
              <Header />
              <div className="inner">
                {children}
                <CartBar />
              </div>
            </ContentStyles>
          </OuterWrapperStyles>
        </Layout>
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
