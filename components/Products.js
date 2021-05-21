// example grid layout component
import React from 'react';
import { Box, Heading } from 'rebass';
import Product from './Product';

export default function Products(props) {
  return (
    <Box
      {...props}
      sx={{
        display: 'grid',
        gridGap: 3, // theme.space[3]
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        width: ['100%', '100%', '100%', '1000px'],
        margin: '0 auto',
      }}
    >
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </Box>
  );
}
