import styled from 'styled-components';
import Product from './ProductMUI';

const ProductsStyles = styled.div`
  /* background-color: #00000022; */
  /* border: 5px solid black; */
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  /* grid-auto-rows: 450px;
  grid */
  grid-column-gap: 2rem;
  padding: 2rem 12rem 2rem 6rem;
  grid-row-gap: 5rem;
  justify-content: space-evenly;
  margin: 0 auto;
`;

export default function Products({ products }) {
  return (
    <ProductsStyles>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </ProductsStyles>
  );
}
