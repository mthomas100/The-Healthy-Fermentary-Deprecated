import Head from 'next/head';
import React, { useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import nookies from 'nookies';

// const HomeStyles = styled.div`
//  */
// `;

export default function Home({ user: { email, id, isUser } }) {
  console.log(isUser);
  return (
    <>
      <div className="container">
        <Head>
          <title>Auth Examples</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {isUser && (
          <>
            <h1>Logged IN</h1>
            <ul>
              <li>{email}</li>
              <li>{id}</li>
            </ul>
          </>
        )}
        {!isUser && <p>LOGGED OUT</p>}
      </div>
    </>
  );
}
