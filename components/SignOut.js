import React, { useContext } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/client';
import { destroyCookie } from 'nookies';

export default function SignOut() {
  return (
    <Link href="/">
      <a
        className="nav-link"
        onClick={(e) => {
          e.preventDefault();
          destroyCookie(null, 'token');
          signOut();
        }}
      >
        Logout
      </a>
    </Link>
  );
}
