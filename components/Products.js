import styled from 'styled-components';
import Product from './Product';

const ProductsStyles = styled.div`
  border: 1px solid red;
`;

export default function Products() {
  return (
    <ProductsStyles>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </ProductsStyles>
  );
}
