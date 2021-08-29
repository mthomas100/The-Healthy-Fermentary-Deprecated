import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { CardContent as CardContentMUI } from '@material-ui/core/CardContent';
import {
  Typography as TypographyMUI,
  CardContent as CardContentMUI,
} from '@material-ui/core';
import Image from 'next/image';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import AddToCart from './AddToCart';
import useComponentSize from '../lib/useComponentSize';
import { useWindowSize } from '../lib/useWindowSize';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'var(--productThemeColor)',
  },
  image: {
    height: '100%',
    width: 'auto',
    display: 'block',
    // borderTopRightRadius: '2rem',
    // borderTopLeftRadius: '2rem',
  },
  cartContent: {
    // paddingBottom: 0,
    borderRadius: 0,
  },
});

const TypographySecondary = styled(TypographyMUI)`
  && {
    line-height: 2;
    font-size: 1.3rem;
  }
`;

const TypographyPrimary = styled(TypographyMUI)``;

const CardContent = styled(CardContentMUI)`
  min-height: ${(props) => props.maxContentHeight}px;
`;

const ProductStyles = styled.div`
  position: relative;
  min-width: 30rem;
  width: 30rem;
  padding-bottom: ${(props) => props.addToCartSize?.height}px;
  .addToCart {
    display: flex;
    flex-direction: row;
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
  const classes = useStyles();
  const windowSize = useWindowSize();

  useEffect(() => {
    setContentSizeArray((prev) => [...prev, contentSize.height].slice(-6));
  }, [windowSize]);

  return (
    <ProductStyles addToCartSize={addToCartSize} ref={productRef}>
      {/* <CardActionArea disableRipple component="div"> */}
      {/* <Link href={`/products/${product.slug}`}>
        <a> */}
      <Card>
        <Image
          src={product.image.url}
          color="green"
          height="100%"
          width="100%"
          layout="responsive"
          className={classes.image}
        />
        {/* </a>
      </Link> */}

        <CardContent
          className={classes.cartContent}
          ref={contentRef}
          maxContentHeight={maxContentHeight}
        >
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
        {/* </CardActionArea> */}
      </Card>
    </ProductStyles>
  );
}
