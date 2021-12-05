import gql from 'graphql-tag';
import React, { useEffect, useState } from 'react';
import CTA from '../components/CTA.js';
import Hero from '../components/Hero.js';
import Products from '../components/Products';
import SubHeader from '../components/SubHeader';
import client from '../lib/apollo-client';

export default function Home({ categories, products, hero }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <>
      {/* <Header /> */}
      <Hero hero={hero} />
      <SubHeader
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />
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

  const { data: heroData } = await client.query({
    query: gql`
      query HERO_QUERY {
        hero {
          topText
          bottomText
          vimeoUrl
          image {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      products: productsData.products,
      categories: categoriesData.categories,
      hero: heroData.hero,
    },
  };
}
