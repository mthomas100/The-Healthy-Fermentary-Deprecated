import { useRouter } from 'next/dist/client/router';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const PRODUCT_QUERY = gql`
  query PRODUCT_QUERY($slug: String!) {
    products(where: { slug: $slug }) {
      title
      description
      price
    }
  }
`;

export default function Products() {
  const {
    query: { slug },
  } = useRouter();
  const { data, loading, error } = useQuery(PRODUCT_QUERY, {
    variables: {
      slug,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <>{data.products[0].title}</>;
}
