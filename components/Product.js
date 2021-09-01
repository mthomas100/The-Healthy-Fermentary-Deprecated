import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { CardActionArea } from '@material-ui/core';
import AddToCart from './AddToCart';
import useComponentSize from '../lib/useComponentSize';
import { useWindowSize } from '../lib/useWindowSize';
import {
  Card,
  CardContent,
  ProductStyles,
  TypographyPrimary,
  TypographySecondary,
} from './styles/ProductStyles';
import PriceTag from './PriceTag';

export default function Product({
  product,
  setContentSizeArray,
  maxContentHeight,
}) {
  const [addToCartSize, setAddToCartSize] = useState();
  const productRef = useRef();
  const contentRef = useRef();
  const contentSize = useComponentSize(contentRef);
  const windowSize = useWindowSize();

  useEffect(() => {
    setContentSizeArray((prev) => [...prev, contentSize.height].slice(-6));
  }, [windowSize]);

  return (
    <ProductStyles addToCartSize={addToCartSize} ref={productRef}>
      <PriceTag price={product.price} />
      <Card>
        <Image
          src={product.image.url}
          color="green"
          height="100%"
          width="100%"
          layout="responsive"
        />

        <CardContent ref={contentRef} maxContentHeight={maxContentHeight}>
          <TypographyPrimary gutterBottom variant="h4" component="h4">
            {product.title}
          </TypographyPrimary>
          <TypographySecondary
            variant="subtitle1"
            color="textSecondary"
            component="p"
          >
            {product.description}
          </TypographySecondary>
        </CardContent>

        <AddToCart product={product} setAddToCartSize={setAddToCartSize} />
      </Card>
    </ProductStyles>
  );
}
