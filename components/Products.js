import styled from 'styled-components';
import { grid, layout } from 'styled-system';
import Product from './Product';

const ProductsContainerStyles = styled.div`
  ${layout}
  margin: 0 auto;
`;

const ProductGridStyles = styled.div`
  ${grid}
  margin: 0 auto;
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  /* grid-gap: 60px; */
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  margin: 0 auto;
`;

export default function Products() {
  return (
    <ProductsContainerStyles
      width={{
        xs: '100%',
        sm: '100%',
        md: '700px',
        lg: '1000px',
        xl: '1300px',
      }}
    >
      <ProductGridStyles
        gridTemplateColumns={{
          xs: '1fr',
          sm: '1fr 1fr',
          md: '1fr 1fr',
          lg: '1fr 1fr 1fr',
          xl: '1fr 1fr 1fr',
        }}
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductGridStyles>
    </ProductsContainerStyles>
  );
}

// gridTemplateColumns={{
//   xs: '1fr',
//   sm: '1fr 1fr',
//   md: '1fr 1fr',
//   lg: '1fr 1fr 1fr',
//   xl: '1fr 1fr 1fr',
// }}
