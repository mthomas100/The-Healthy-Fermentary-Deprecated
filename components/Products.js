// example grid layout component
import { Box, Heading } from 'rebass';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Product from './Product';

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

export default function Products(props) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Box
      {...props}
      sx={{
        display: 'grid',
        gridGap: 3, // theme.space[3]
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        margin: '0 auto',
      }}
    >
      {data.products.map((product) => (
        <Product
          title={product.title}
          description={product.description}
          imageUrl={product.image.url}
          id={product.id}
          slug={product.slug}
        />
      ))}
    </Box>
  );
}
