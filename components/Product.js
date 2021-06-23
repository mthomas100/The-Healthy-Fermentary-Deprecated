import { Box, Card, Flex, Heading, Text } from 'rebass/styled-components';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import AddtoCartButton from './AddtoCartButton';

const ProductStyles = styled.div`
  background-color: #f8f8ff;
  position: relative;
  font-family: 'Nunito';

  .card {
    position: relative;
    display: block;
    height: 100%;
    border-radius: calc(8 * 1px);
    overflow: hidden;
    text-decoration: none;
  }

  /* .card__image {
    width: 100%;
    height: auto;
  } */

  .card__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    border-radius: calc(8 * 1px);
    background-color: #f8f8ff6c;
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
    background-color: #f8f8ff6c;
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
    fill: #f8f8ff6c;
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
    font-size: 2em;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 0 0 0.3em;
    /* color: #6a515e; */
    color: #000000c0;
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
    background-color: #f8f8ff6c;
    font-family: 'MockFlowFont';
    font-size: 1.6em;
    font-weight: 00;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: scroll;
  }
`;

export default function Product({ product }) {
  const { id, title, description, slug, image } = product;

  return (
    <ProductStyles>
      <div className="card">
        <Image
          src={image.url}
          width="100%"
          height="100em"
          layout="responsive"
          objectFit="cover"
          className="card__image"
        />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img
              className="card__thumb"
              src="https://i.imgur.com/7D7I6dI.png"
              alt=""
            />
            <div className="card__header-text">
              <h3 className="card__title">{title}</h3>
              {/* <span className="card__status">
                        {product.description}
                      </span> */}
            </div>
          </div>
          <p className="card__description">{description}</p>
        </div>
      </div>
    </ProductStyles>
  );
}
