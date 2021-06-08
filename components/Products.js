// example grid layout component
import { Box, Heading } from 'rebass/styled-components';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { withSize } from 'react-sizeme';
import Product from './Product';
import { useSize } from '../lib/sizeState';
import Categories from './Categories';

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

function Products({ size }) {
  const { setProductSize, windowSize } = useSize();

  useEffect(() => {
    setProductSize(size);
    return () => {};
  }, [windowSize]);

  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Categories />
      <Box
        sx={{
          display: 'grid',
          gridGap: 3, // theme.space[3]
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          margin: '0 auto',
        }}
      >
        {data.products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </Box>
    </>
  );
}

export default withSize()(Products);
