import Head from 'next/head';
import React, { useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Products from '../components/Products';

export default function Home() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Auth Examples</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Products />
      </div>
    </>
  );
}
