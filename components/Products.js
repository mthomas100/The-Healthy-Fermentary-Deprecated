// example grid layout component
import { Box, Heading } from 'rebass/styled-components';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Product from './Product';
import Categories from './Categories';

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

const ProductsStyles = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0 auto;

  .sidebar {
    width: 250px;
    height: auto;
    position: relative;
    border: 3px solid blue;
  }
  .products {
    background-color: #00000022;
    border: 5px solid black;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-auto-rows: 300px;
    grid-column-gap: 2rem;
    padding: 2rem;
    grid-row-gap: 5rem;
    justify-content: space-evenly;
    margin: 0 auto;
  }
  .product {
    border: 1px solid red;
  }
`;

function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <ProductsStyles>
        <div className="sidebar" />
        <div className="products">
          <div className="product" />
          <div className="product" />
          <div className="product" />
          <div className="product" />
          <div className="product" />
          <div className="product" />
          <div className="product" />
          <div className="product" />
        </div>
      </ProductsStyles>
    </>
  );
}

export default Products;
