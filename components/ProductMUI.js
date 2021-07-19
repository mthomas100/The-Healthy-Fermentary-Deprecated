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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: '10px',
    backgroundColor: 'var(--productThemeColor)',
  },
  image: {
    backgroundColor: 'var(--productThemeColor)',
    filter: 'brightness(90%)',
  },
  cartContent: {},
  typography: {
    lineHeight: '2',
    fontSize: '1.3rem',
  },
});

const TypographyStyled = styled(Typography)``;

export default function ImgMediaCard({ product }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Image
          src={product.image.url}
          color="green"
          width="100%"
          height="auto"
          layout="responsive"
          objectFit="fill"
          className={classes.image}
        />

        <CardContent className={classes.cartContent}>
          <Typography gutterBottom variant="h4" component="h4">
            {product.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            component="p"
            className={classes.typography}
          >
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions className={classes.cartContent}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
