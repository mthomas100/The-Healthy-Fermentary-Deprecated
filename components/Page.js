import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

const InnerStyles = styled.div`3
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
      <ThemeProvider theme={theme}>
        <InnerStyles>{children}</InnerStyles>
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
