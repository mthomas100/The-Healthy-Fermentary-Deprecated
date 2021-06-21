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
  font-family: 'Noto Sans JP', sans-serif;

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 0;
    list-style-type: none;
  }

  .card {
    position: relative;
    display: block;
    height: 100%;
    border-radius: calc(var(--curve) * 1px);
    overflow: hidden;
    text-decoration: none;
  }

  .card__image {
    width: 100%;
    height: auto;
  }

  .card__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    border-radius: calc(var(--curve) * 1px);
    background-color: #fff;
    transform: translateY(100%);
    transition: 0.2s ease-in-out;
  }

  .card:hover .card__overlay {
    transform: translateY(0);
  }

  .card__header {
    position: relative;
    display: flex;
    align-items: center;
    gap: 2em;
    padding: 2em;
    border-radius: calc(var(--curve) * 1px) 0 0 0;
    background-color: #fff;
    transform: translateY(-100%);
    transition: 0.2s ease-in-out;
  }

  .card__arc {
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 100%;
    right: 0;
    z-index: 1;
  }

  .card__arc path {
    fill: #fff;
    d: path('M 40 80 c 22 0 40 -22 40 -40 v 40 Z');
  }

  .card:hover .card__header {
    transform: translateY(0);
  }

  .card__thumb {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .card__title {
    font-size: 1em;
    margin: 0 0 0.3em;
    color: #6a515e;
  }

  .card__tagline {
    display: block;
    margin: 1em 0;
    font-family: 'MockFlowFont';
    font-size: 0.8em;
    color: #d7bdca;
  }

  .card__status {
    font-size: 0.8em;
    color: #d7bdca;
  }

  .card__description {
    padding: 0 2em 2em;
    margin: 0;
    color: #d7bdca;
    font-family: 'MockFlowFont';
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
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
        <ul className="cards">
          {data.products.map((product) => (
            <li>
              <a href="" className="card">
                <Image
                  src={product.image.url}
                  width="100%"
                  height="100em"
                  layout="responsive"
                  objectFit="cover"
                />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img
                      className="card__thumb"
                      src="https://i.imgur.com/7D7I6dI.png"
                      alt=""
                    />
                    <div className="card__header-text">
                      <h3 className="card__title">{product.title}</h3>
                      {/* <span className="card__status">
                        {product.description}
                      </span> */}
                    </div>
                  </div>
                  <p className="card__description">{product.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </ProductsStyles>
    </>
  );
}

export default Products;
