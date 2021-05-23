import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';
import Layout from './Layout';

function Page({ children }) {
  // const [session, loading] = useSession();
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Layout>
        <ThemeProvider theme={theme}>
          <Header />
          {children}
        </ThemeProvider>
      </Layout>
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
