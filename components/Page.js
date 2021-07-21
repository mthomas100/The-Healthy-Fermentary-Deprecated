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

const ContentStyles = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  padding: 2rem 4rem 4rem 4rem;
`;

function Page({ children }) {
  console.log(children);

  return (
    <>
      <GlobalStyles />
      <Typography />
      <ThemeProvider theme={theme}>
        {/* <TopImage /> */}

        <Layout>
          <ContentStyles>
            <Header />
            {children}
          </ContentStyles>
          <CartBar />
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
