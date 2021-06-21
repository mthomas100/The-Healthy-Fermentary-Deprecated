import { Box, Card, Flex, Heading, Text } from 'rebass/styled-components';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import AddtoCartButton from './AddtoCartButton';

const ProductStyles = styled.div``;

export default function Product(product) {
  const { id, title, description, slug, image } = product;

  return <ProductStyles />;
}
