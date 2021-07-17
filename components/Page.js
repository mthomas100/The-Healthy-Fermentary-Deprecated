import styled, { ThemeProvider } from 'styled-components';
import { Box, Flex } from 'rebass/styled-components';
import theme from './styles/theme';
import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';
import Cart from './Cart';
import { useCart } from '../lib/cartState';

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

function Content({ children }) {
  return (
    <Box
      padding="3"
      sx={{
        width: '100%',
        margin: '0 auto',
        height: '100%',
      }}
    >
      <Header />
      {children}
    </Box>
  );
}

function Page({ children }) {
  // const [session, loading] = useSession();
  console.log(children);

  return (
    <>
      <GlobalStyles />
      <Typography />
      <ThemeProvider theme={theme}>
        <Layout>
          <Content>{children}</Content>
          <Cart />
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
