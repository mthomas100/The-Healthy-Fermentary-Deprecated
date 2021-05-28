import { Box, Card, Flex, Heading, Text } from 'rebass';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Button from './ButtonAdd';

export default function Product({
  title,
  description,
  imageUrl,
  price,
  id,
  slug,
}) {
  const InfoStyles = styled(Box)`
    display: block;

    .title {
      font-family: 'Chivo', cursive;
      font-weight: 600;
    }

    .description {
      font-family: Noto Sans;
    }
  `;

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Image
        src={imageUrl}
        width="100%"
        height="auto"
        layout="responsive"
        objectFit="cover"
      />
      <InfoStyles>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </InfoStyles>
      <Button width="100%">
        <Link href={`/products/${slug}`}>Add to Cart</Link>
      </Button>
    </Card>
  );
}
