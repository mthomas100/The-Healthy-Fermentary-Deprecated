import gql from 'graphql-tag';
import client from '../../lib/apollo-client';

export default function Products({ error, product }) {
  // console.log(error);

  if (!error) {
    return (
      <>
        <h2>NO ERROR</h2>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </>
    );
  }
  return <h2>NO ERROR</h2>;
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

  const paths = data.products.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths: paths || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const { data, error } = await client.query({
    variables: { slug },
    query: gql`
      query PRODUCTS_QUERY($slug: String!) {
        products(where: { slug: $slug }) {
          slug
          title
          description
        }
      }
    `,
  });

  return {
    props: {
      product: data.products[0] || null,
      error: error || null,
    },
    revalidate: 1,
  };
}
