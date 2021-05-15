import Link from 'next/link';
import styled from 'styled-components';
import { getSession, signIn, signOut, useSession } from 'next-auth/client';
import RequestReset from '../components/RequestReset';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

export default function SignInPage() {
  return (
    <GridStyles>
      <SignIn />
      <SignUp />
      <RequestReset />
      <div>
        <Link href="/api/auth/signin">
          <button
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign In With Google
          </button>
        </Link>
      </div>
    </GridStyles>
  );
}
