import { Box, Card, Flex, Heading, Text } from 'rebass/styled-components';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';
import { CartAdd } from '@styled-icons/boxicons-solid/CartAdd';
import { useCart } from '../lib/cartState';

const ProductStyles = styled.div`
  background-color: #42a89755;
  position: relative;
  font-family: 'Nunito';
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  transform: scale(${(props) => (props.mouseIsOver ? '1.02' : '1')});
  transition: 0.5s all;
  cursor: default;

  .imageWrapper {
    position: relative;

    /* .imageOverlay {
      position: absolute;
      z-index: 10;
      background-color: black;
      opacity: 0.4;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      height: 100%;
      width: 100%;
      margin: 0 auto;
    } */

    .image {
      position: relative;
      z-index: 1;
    }

    .cartAddWrapper {
      opacity: ${(props) => (props.mouseIsOver ? 1 : 0)};
      transition: 0.5s all;
      position: absolute;
      bottom: 0;
      height: 30px;
      margin-left: 1.6em;
      margin-bottom: 10px;
      z-index: 10;
      padding: 2px;
      border: 0.5px solid #2d2d2d;
      border-radius: 50%;
      /* background-color: #ffa600a6; */
    }

    .cartAddWrapper:hover {
      /* background-color: #ff6600a6; */
      background-color: #00000029;
      transition: 0.2s all;
    }

    .cartAdd {
      height: 100%;
      width: auto;
      position: relative;
      right: 1px;
      padding: 3px;
    }
  }

  .details {
    height: auto;
    /* background-color: #9696961c; */
    /* box-shadow: 0 -2px 20px 0 rgba(94, 94, 94, 0.2); */
    padding: 1em 2em;
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: #9696961c;
  }

  .title {
    font-size: 2.5em;
    letter-spacing: 3px;
    font-weight: 400;
    color: #000000;
    height: auto;
    padding: 0;
  }

  .description {
    font-size: 1.2em;
    font-weight: 400;
    color: #00000090;
    line-height: 1.9em;
    letter-spacing: 0.5px;
  }
`;

export default function Product({ product }) {
  const { id, title, description, slug, image, price } = product;
  const { openCart, addToCart } = useCart();
  const [mouseIsOver, setMouseIsOver] = useState(false);

  function handleAddToCart() {
    // add to cart animation (always)
    // 1) the button animates
    // 2) the shopping cart items red circle number updates
    // if the screen is big enough, openCart as sidebar
    // (if screen is too small don't)
    // openCart();
    addToCart(product);
  }

  return (
    <ProductStyles
      onMouseOver={() => setMouseIsOver(true)}
      onMouseOut={() => setMouseIsOver(false)}
      onMouseEnter={() => setMouseIsOver(true)}
      mouseIsOver={mouseIsOver}
    >
      <a>
        <div className="imageWrapper">
          <div className="cartAddWrapper">
            <CartAdd className="cartAdd" onMouseDown={handleAddToCart} />
          </div>
          <Image
            src={image.url}
            width="100%"
            height="auto"
            layout="responsive"
            objectFit="fill"
            className="image"
          />
        </div>

        <div className="details">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
      </a>
    </ProductStyles>
  );
}
