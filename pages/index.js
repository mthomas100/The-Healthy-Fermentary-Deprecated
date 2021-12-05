import gql from 'graphql-tag';
import React, { useState } from 'react';
import CTA from '../components/CTA.js';
import Hero from '../components/Hero.js';
import Products from '../components/Products';
import Categories from '../components/Categories';
import client from '../lib/apollo-client';

export default function Home({ categories, products, hero }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <>
      {/* <Header /> */}
      <Hero hero={hero} />
      <Categories
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
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
