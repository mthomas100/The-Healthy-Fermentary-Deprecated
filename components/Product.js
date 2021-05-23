import { Box, Card, Heading, Text } from 'rebass';
import Image from 'next/image';
import Link from 'next/link';
import Button from './ButtonAdd';

export default function Product({
  title,
  description,
  imageUrl,
  price,
  id,
  slug,
}) {
  console.log({ title, description, imageUrl, price, id, slug });
  return (
    <Card
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      bg="white"
    >
      <Image
        src={imageUrl}
        width="100%"
        height="auto"
        layout="responsive"
        objectFit="cover"
      />
      <Box px={2}>
        <Heading as="h3">{title}</Heading>
        <Text fontSize={0}>{description}</Text>
      </Box>
      <Button width="100%">
        <Link href={`/products/${slug}`}>Add to Cart</Link>
      </Button>
    </Card>
  );
}
