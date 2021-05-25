import { Box, Card, Flex, Heading, Text } from 'rebass';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from './ButtonAdd';

export default function Product({
  title,
  description,
  imageUrl,
  price,
  id,
  slug,
  initialTextHeight,
  setInitialTextHeight,
  textHeight,
  setTextHeight,
}) {
  const textRef = useRef(null);

  const InfoStyles = styled(Box)`
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
  `;

  useEffect(() => {
    function handleWindowEvent() {
      const { offsetHeight } = textRef.current;
      setInitialTextHeight((prev) => [...prev, offsetHeight]);
      console.log(initialTextHeight);
      setTextHeight(Math.max(...initialTextHeight));
    }

    window.addEventListener('resize', handleWindowEvent);
    window.addEventListener('load', handleWindowEvent);

    return () => {
      window.removeEventListener('resize', handleWindowEvent);
      window.removeEventListener('load', handleWindowEvent);
    };
  }, [setInitialTextHeight, setTextHeight, initialTextHeight]);
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
      <InfoStyles m={2} ref={textRef} height={textHeight}>
        <Text fontSize={3} py={0}>
          {title}
        </Text>
        <Text fontSize={0} fontWeight="normal">
          {description}
        </Text>
      </InfoStyles>
      <Button width="100%">
        <Link href={`/products/${slug}`}>Add to Cart</Link>
      </Button>
    </Card>
  );
}
