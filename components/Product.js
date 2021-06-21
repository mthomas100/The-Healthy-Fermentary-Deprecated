import { Box, Card, Flex, Heading, Text } from 'rebass/styled-components';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import AddtoCartButton from './AddtoCartButton';

const ProductStyles = styled(Card)`
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 10px;

  .details {
    display: flex;
    flex-direction: column;
    font-family: Nunito;
    margin: 8px;
  }

  .title {
    font-size: 2em;
    font-weight: 800;
    margin-bottom: 4px;
  }

  .description {
    font-size: 1.2em;
    font-weight: 600;
  }

  button {
    font-size: 2em;
    line-height: 2em;
    background-color: white;
    border: 1px solid black;
    padding: 5px;
    font-family: 'Pathway Gothic One', sans-serif;
    display: block;
    width: 100%;
    letter-spacing: 0.1em;
  }
`;

export default function Product(product) {
  const { id, title, description, slug, image } = product;

  return (
    <ProductStyles>
      <Link href={`/products/${slug}`}>
        <a>
          <Image
            src={image.url}
            width="100%"
            height="100em"
            layout="responsive"
            objectFit="cover"
          />

          <div className="details">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
          </div>
        </a>
      </Link>
      <AddtoCartButton {...product} />
    </ProductStyles>
  );
}
