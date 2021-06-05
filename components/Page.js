import styled, { ThemeProvider } from 'styled-components';
import { Box, Flex } from 'rebass/styled-components';
import theme from './styles/theme';
import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';
import Cart from './Cart';
import Content from './Content';
import { useCart } from '../lib/cartState';

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  transform: translateX(250px); /*half of the amount of space occupied by cart*/
  ${(props) => props.open && `transform: translateX(0);`}
  transition: 0.7s all;
`;

function Page({ children }) {
  // const [session, loading] = useSession();
  const { cartOpen, closeCart, cartContents } = useCart();

  return (
    <>
      <GlobalStyles />
      <Typography />
      <ThemeProvider theme={theme}>
        <Layout open={cartOpen}>
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
