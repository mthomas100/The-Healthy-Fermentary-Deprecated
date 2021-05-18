import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Typography from './styles/Typography';

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  /* padding: 2rem; */
`;

function Page({ children }) {
  // const [session, loading] = useSession();
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Header />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
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
