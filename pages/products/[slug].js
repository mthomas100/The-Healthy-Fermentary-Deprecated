import gql from 'graphql-tag';
import client from '../../lib/apollo-client';

export default function Products({ products }) {
  return (
    <>
      <p>dynamic data here</p>
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query PRODUCTS_QUERY {
        products {
          slug
        }
      }
    `,
  });

  console.log(data);

  const paths = data.products.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths: paths || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // const { data } = await client.query({
  //   query: POST_DATA,
  //   variables: { id: params.slug, idType: 'SLUG' },
  // });

  return {
    props: {
      product: undefined,
    },
  };
}
