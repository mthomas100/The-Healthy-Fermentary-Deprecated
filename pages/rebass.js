// example grid layout component
import React from 'react';
import { Box, Heading } from 'rebass';
import Card from '../components/Card';

export default (props) => (
  <Box
    {...props}
    sx={{
      display: 'grid',
      gridGap: 3, // theme.space[3]
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    }}
  >
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </Box>
);
