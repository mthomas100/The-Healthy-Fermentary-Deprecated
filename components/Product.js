import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { Typography as TypographyMUI } from '@material-ui/core';
import Image from 'next/image';
import styled from 'styled-components';
import { useCart } from '../lib/cartState';
import AddToCart from './AddToCart';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: '10px',
    backgroundColor: 'var(--productThemeColor)',
  },
  image: {
    // backgroundColor: 'var(--productThemeColor)',
    // filter: 'brightness(90%)',
    height: '100%',
    width: 'auto',
    display: 'block',
  },
  cartContent: {},
  // typography: {
  //   lineHeight: '2',
  //   fontSize: '1.3rem',
  // },
});

const TypographySecondary = styled(TypographyMUI)`
  && {
    line-height: 2;
    font-size: 1.3rem;
  }
`;

const TypographyPrimary = styled(TypographyMUI)``;

const ProductStyles = styled.div`
  .addToCart {
    display: flex;
    flex-direction: row;
  }
`;

export default function Product({ product }) {
  const classes = useStyles();
  const { addToCart, openCart } = useCart();

  return (
    <ProductStyles>
      <CardActionArea disableRipple>
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
      </CardActionArea>
    </ProductStyles>
  );
}
