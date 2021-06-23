import { Box, Card, Flex, Heading, Text } from 'rebass/styled-components';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import AddtoCartButton from './AddtoCartButton';

const ProductStyles = styled.div`
  background-color: #ffffffb9;
  position: relative;
  font-family: 'Nunito';
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  border-radius: 10px;

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
    padding: 0.1em 0;
  }

  .description {
    font-size: 1.2em;
    font-weight: 600;
    color: #0000007b;
  }
`;

export default function Product({ product }) {
  const { id, title, description, slug, image } = product;

  return (
    <ProductStyles>
      <div className="imageWrapper">
        <Image
          src={image.url}
          width="100%"
          height="auto"
          layout="responsive"
          objectFit="fill"
          className="image"
        />

        <AddtoCartButton />
      </div>

      <div className="details">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </ProductStyles>
  );
}
