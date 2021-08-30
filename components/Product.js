import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
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

const PriceStyles = styled.div`
  position: absolute;
  z-index: 20;
  top: 5%;
  right: 5%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000000c5;
  display: flex;
  justify-content: center;
  align-items: center;

  .currency {
    margin-right: 2px;
  }

  .price {
    text-align: center;
    color: white;
    font-size: 1.3rem;
  }
`;

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
      <PriceStyles>
        <div className="price">
          <span className="currency">₹</span>
          {product.price}
        </div>
      </PriceStyles>
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
