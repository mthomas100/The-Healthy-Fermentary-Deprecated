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
  /* --------- Card Animation ---------- */
  .card:not(:empty):hover,
  .card:not(:empty):focus {
    z-index: 1;
    color: #fff;
    background: #ea124f;
    opacity: 1;
    transform: scale(1) rotateZ(0deg);
    cursor: pointer;

    &:after {
      opacity: 1;
    }

    &:before {
      opacity: 0;
    }
  }

  .card {
    padding: 10px;
    background: #fcc99e;
    border-radius: 0.7em;
    opacity: 0.6;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: background, transform, color, opacity;

    &:not(:empty):before {
      box-shadow: -2px 2px 8px 2px hsla(0, 0%, 0%, 0.2);
    }

    &:empty {
      opacity: 0.3;
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      border-radius: 0.7em;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: opacity 0.4s cubic-bezier(0.33, 1, 0.68, 1);
    }

    &:after {
      box-shadow: -20px 20px 12px 6px hsla(0, 0%, 0%, 0.2);
      opacity: 0;
    }
  }
  /* --------- Grid ---------- */
  .grid {
    width: 100%;
    height: 100%;
    padding: 20px;
    display: grid;
    overflow: hidden;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 20px;
  }

  .item1 {
    grid-area: 1 / 1 / 3 / 3;
  }
  .item2 {
    grid-area: 3 / 3 / 4 / 4;
    &.card:hover,
    &.card:focus {
      background: #00005c;
    }
  }
  .item3 {
    grid-area: 4 / 1 / 5 / 4;
  }
  .item4 {
    grid-area: 1 / 3 / 2 / 5;
  }
  .item5 {
    grid-area: 2 / 4 / 3 / 5;
  }
  .item6 {
    grid-area: 3 / 4 / 4 / 5;
  }
  .item7 {
    grid-area: 3 / 4 / 5 / 5;
  }
  .item8 {
    grid-area: 1 / 5 / 2 / 6;
    &.card:hover,
    &.card:focus {
      background: #f57b51;
    }
  }
  .item9 {
    grid-area: 2 / 5 / 3 / 6;
  }
  .item10 {
    grid-area: 3 / 5 / 4 / 6;
  }
  .item11 {
    grid-area: 4 / 5 / 5 / 6;
    &.card:hover,
    &.card:focus {
      background: #00a8cc;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /*--------- Layout -------- */
  *,
  *:before,
  *:after {
    position: relative;
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'PT Sans', sans-serif;
    background: #fff6d9;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.75rem 0 1.05rem;
    line-height: 1.2;
    font-family: 'Jost', sans-serif;
  }

  h1 {
    margin-top: 0;
    font-size: 3.052em;
  }

  h2 {
    font-size: 1em;
  }

  p {
    line-height: 1.3;
  }

  /* --------- Responsive ---------- */
  @media only screen and (max-width: 600px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(6, minmax(auto, 300px));
      overflow-y: scroll;
    }

    .item1 {
      grid-area: 1 / 1 / 2 / 3;
    }
    .card {
      grid-area: auto;
      text-align: left;

      &:empty {
        display: none;
      }
    }
  }
`;

function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Categories />
      <ProductsStyles>
        <main className="grid">
          {/* <section className="content item1">
            <h1>Hover Card Animation</h1>
            <p>
              By animating a few CSS paint & composite properties, we can create
              fun interactions on hover & focus
            </p>
          </section> */}
          <section className="card item2">
            <h2>Hover the cards</h2>
          </section>
          <section className="card item3" />
          <section className="card item4" />
          <section className="card item5">
            <h2>because interactions make it more fun</h2>
          </section>
          <section className="card item7" />
          <section className="card item8">
            <h2>animating the shadow on the pseudo element makes it pop out</h2>
          </section>
          <section className="card item9" />
          <section className="card item10" />
          <section className="card item11">
            <h2>add a :focus state too!</h2>
          </section>
        </main>
      </ProductsStyles>
    </>
  );
}

export default Products;
