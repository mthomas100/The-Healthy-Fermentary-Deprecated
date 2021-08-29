import React, { useEffect, useRef, useState } from 'react';
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
  border: 2px solid red;
  position: relative;
  min-width: 30rem;
  width: 30rem;
  padding: 1rem;
  padding-bottom: ${(props) => props.addToCartSize?.height}px;
  .addToCart {
    display: flex;
    flex-direction: row;
  }
`;

export default function Product({ product }) {
  const [addToCartSize, setAddToCartSize] = useState();
  const productRef = useRef();
  const classes = useStyles();

  return (
    <ProductStyles addToCartSize={addToCartSize} ref={productRef}>
      {/* <CardActionArea disableRipple component="div"> */}
      {/* <Link href={`/products/${product.slug}`}>
        <a> */}
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
      </CardContent>
      <AddToCart product={product} setAddToCartSize={setAddToCartSize} />
      {/* </CardActionArea> */}
    </ProductStyles>
  );
}
