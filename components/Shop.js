// example grid layout component
import { Box, Heading } from 'rebass/styled-components';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Product from './Product';
import Sidebar from './Sidebar';
import Products from './Products';
import Loading from './Loading';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    products {
      id
      title
      description
      image {
        url
      }
      price
      slug
    }
  }
`;
const TopStyles = styled.div`
  height: 50px;
  width: 100%;
  border: 1px solid black;
`;

const ShopContainerStyles = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0 auto;
`;

function Shop() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {/* <TopStyles /> */}
      <ShopContainerStyles>
        <Sidebar />
        <Products products={data.products} />
      </ShopContainerStyles>
    </>
  );
}

export default Shop;
