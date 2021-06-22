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
const TopStyles = styled.div`
  height: 50px;
  width: 100%;
  border: 1px solid black;
`;

const ProductsContainerStyles = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0 auto;
`;

const ProductsStyles = styled.div`
  background-color: #00000022;
  /* border: 5px solid black; */
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: 300px;
  grid-column-gap: 2rem;
  padding: 2rem;
  grid-row-gap: 5rem;
  justify-content: space-evenly;
  margin: 0 auto;

  .product {
    border: 1px solid red;
  }
`;

const SideBarStyles = styled.div`
  width: 250px;
  height: auto;
  position: relative;
  border: 1px solid black;

  .categoryTitle {
    font-size: 1.5rem;
  }

  .categoryItem {
    font-size: 1rem;
  }
`;

function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <TopStyles />
      <ProductsContainerStyles>
        <SideBarStyles>
          <div className="categoryTitle">Type</div>
          <div className="categoryItem">ItemX</div>
          <div className="categoryItem">ItemX</div>
          <div className="categoryItem">ItemX</div>
          <div className="categoryTitle">Type</div>
          <div className="categoryItem">ItemX</div>
          <div className="categoryItem">ItemX</div>
          <div className="categoryItem">ItemX</div>
        </SideBarStyles>
        <ProductsStyles>
          <div className="product" />
          <div className="product" />
          <div className="product" />
          <div className="product" />
          <div className="product" />
          <div className="product" />
          <div className="product" />
          <div className="product" />
        </ProductsStyles>
      </ProductsContainerStyles>
    </>
  );
}

export default Products;
