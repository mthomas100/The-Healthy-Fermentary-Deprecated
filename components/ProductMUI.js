import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';
import styled from 'styled-components';
import { useCart } from '../lib/cartState';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: '10px',
    backgroundColor: 'var(--productThemeColor)',
  },
  image: {
    backgroundColor: 'var(--productThemeColor)',
    filter: 'brightness(90%)',
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

const TypographyStyled = styled(Typography)`
  && {
    line-height: 2;
    font-size: 1.3rem;
  }
`;

export default function ImgMediaCard({ product }) {
  const classes = useStyles();
  const { addToCart, openCart } = useCart();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Image
          src={product.image.url}
          color="green"
          height="100%"
          width="100%"
          layout="responsive"
          className={classes.image}
        />

        <CardContent className={classes.cartContent}>
          <Typography gutterBottom variant="h4" component="h4">
            {product.title}
          </Typography>
          <TypographyStyled
            variant="subtitle1"
            color="textSecondary"
            component="p"
          >
            {product.description}
          </TypographyStyled>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cartContent}>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            addToCart(product);
            openCart();
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
