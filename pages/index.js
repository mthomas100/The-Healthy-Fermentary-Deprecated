import gql from 'graphql-tag';
import React from 'react';
import Products from '../components/Products';
import client from '../lib/apollo-client';

export default function Home({ products }) {
  return (
    <>
      <Products products={products} />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
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
    `,
  });

  return {
    props: {
      products: data.products,
    },
  };
}
