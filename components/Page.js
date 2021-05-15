import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { signIn, signOut, useSession, getSession } from 'next-auth/client';
import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

function Page({ children }) {
  // const [session, loading] = useSession();
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
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
