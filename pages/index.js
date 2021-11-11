import gql from 'graphql-tag';
import React, { useEffect, useState } from 'react';
import Products from '../components/Products';
import SubHeader from '../components/SubHeader';
import client from '../lib/apollo-client';

export default function Home({ categories, products }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      {/* <SubHeader
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      /> */}
      <Products products={products} selectedCategory={selectedCategory} />
    </>
  );
}

export async function getStaticProps() {
  const { data: productsData } = await client.query({
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
          categories {
            name
            id
          }
        }
      }
    `,
  });

  const { data: categoriesData } = await client.query({
    query: gql`
      query ALL_CATEGORIES_QUERY {
        categories {
          name
          slug
          id
        }
      }
    `,
  });

  return {
    props: {
      products: productsData.products,
      categories: categoriesData.categories,
    },
  };
}
