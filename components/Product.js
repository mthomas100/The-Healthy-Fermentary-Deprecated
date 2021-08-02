import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import { Typography as TypographyMUI } from '@material-ui/core';
import Image from 'next/image';
import styled from 'styled-components';
import AddToCart from './AddToCart';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: '10px',
    backgroundColor: 'var(--productThemeColor)',
  },
  image: {
    height: '100%',
    width: 'auto',
    display: 'block',
  },
  cartContent: {},
});

const TypographySecondary = styled(TypographyMUI)`
  && {
    line-height: 2;
    font-size: 1.3rem;
  }
`;

const TypographyPrimary = styled(TypographyMUI)``;

const ProductStyles = styled.div`
  min-width: 30rem;
  width: 30rem;
  .addToCart {
    display: flex;
    flex-direction: row;
  }
`;

export default function Product({ product, productsArr }) {
  const productRef = useRef();
  const classes = useStyles();
  useEffect(() => {
    productsArr.push(productRef);
  }, [productsArr]);

  return (
    <ProductStyles ref={productRef}>
      {/* <CardActionArea disableRipple component="div"> */}
      <Image
        src={product.image.url}
        color="green"
        height="100%"
        width="100%"
        layout="responsive"
        className={classes.image}
      />

      <CardContent className={classes.cartContent}>
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

        <AddToCart product={product} />
      </CardContent>
      {/* </CardActionArea> */}
    </ProductStyles>
  );
}
