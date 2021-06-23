import { Box, Card, Flex, Heading, Text } from 'rebass/styled-components';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';
import AddtoCartButton from './AddtoCartButton';
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
  }
  .details {
    height: auto;
    background-color: #e4e4e41a;
    /* box-shadow: 0 -2px 20px 0 rgba(94, 94, 94, 0.2); */
    padding: 1em 2em;
    display: flex;
    flex-direction: column;
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
    openCart();
    addToCart(product);
  }

  return (
    <ProductStyles
      onMouseDown={handleAddToCart}
      onMouseOver={() => setMouseIsOver(true)}
      onMouseOut={() => setMouseIsOver(false)}
      mouseIsOver={mouseIsOver}
    >
      <a>
        <div className="imageWrapper">
          <Image
            src={image.url}
            width="100%"
            height="auto"
            layout="responsive"
            objectFit="fill"
            className="image"
          />

          <AddtoCartButton product={product} mouseIsOver={mouseIsOver} />
        </div>

        <div className="details">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
      </a>
    </ProductStyles>
  );
}
