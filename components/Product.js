import { Box, Card, Flex, Heading, Text } from 'rebass/styled-components';
import Image from 'next/image';
import Link from 'next/link';
import AddtoCartButton from './AddtoCartButton';

export default function Product(product) {
  const { id, title, description, slug, image } = product;
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
      <Link href={`/products/${slug}`}>
        <Image
          src={image.url}
          width="100%"
          height="auto"
          layout="responsive"
          objectFit="cover"
        />
      </Link>
      <Link href={`/products/${slug}`}>
        <Flex m={2} flex="auto" flexDirection="column" fontFamily="Nunito">
          <Text fontSize={3} mb={1} fontWeight="800">
            {title}
          </Text>
          <Text fontSize={1} fontWeight="600">
            {description}
          </Text>
        </Flex>
      </Link>
      <AddtoCartButton {...product} />
    </Card>
  );
}
