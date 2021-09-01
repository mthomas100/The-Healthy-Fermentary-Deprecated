import {
  Typography as TypographyMUI,
  CardContent as CardContentMUI,
  Card as CardMUI,
} from '@material-ui/core';
import styled from 'styled-components';

const ProductStyles = styled.div`
  position: relative;
  min-width: 30rem;
  width: 30rem;
  padding-bottom: ${(props) => props.addToCartSize?.height}px;
`;

const TypographyPrimary = styled(TypographyMUI)``;
const TypographySecondary = styled(TypographyMUI)`
  && {
    line-height: 2;
    font-size: 1.3rem;
  }
`;

const Card = styled(CardMUI)`
  && {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const CardContent = styled(CardContentMUI)`
  && {
    min-height: ${(props) => props.maxContentHeight}px;
    pointer-events: none;
  }
`;

export {
  ProductStyles,
  TypographyPrimary,
  TypographySecondary,
  Card,
  CardContent,
};
