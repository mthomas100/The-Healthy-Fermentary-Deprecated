import gql from 'graphql-tag';
import React, { useEffect, useState } from 'react';
import CTA from '../components/CTA.js';
import Hero from '../components/Hero.js';
import Products from '../components/Products';
import PromoSection from '../components/PromoSection.js';
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
      {/* <PromoSection /> */}
      <Hero />
      <Products products={products} selectedCategory={selectedCategory} />
      <CTA />
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
