import Link from 'next/link';
import { useSession } from 'next-auth/client';
import SignOut from './SignOut';
import NavStyles from './styles/NavStyles';

export default function Nav() {
  const [session, loading] = useSession();
  const user = session;
  return (
    <NavStyles>
      <Link href="/dashboard">Dashboard</Link>
      {user && (
        <>
          <Link href="/account">Account</Link>
          <SignOut />
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">Sign In</Link>
        </>
      )}
    </NavStyles>
  );
}
