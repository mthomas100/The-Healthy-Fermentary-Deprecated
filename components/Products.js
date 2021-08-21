import styled from 'styled-components';
import { useEffect } from 'react';
import Product from './Product';
import { useCart } from '../lib/cartState';
import { useWindowSize } from '../lib/useWindowSize';
import { useLayout } from '../lib/layoutState';

const ProductsStyles = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 0 6rem 0;
  margin: 0 auto;
  align-items: center;

  .products {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-basis: auto;
    column-gap: 4rem;
    padding: 2rem 0rem;
    grid-row-gap: 5rem;
    justify-content: space-evenly;
    margin: 0 auto;
  }
`;

export default function Products({ products }) {
  const productsArr = [];
  const { setCartIsHovering } = useCart();
  const { setProductsLeftOffset } = useLayout();
  const windowSize = useWindowSize();

  useEffect(() => {
    const firstProduct = productsArr[0];
    setProductsLeftOffset(firstProduct.current.offsetLeft);
  }, [productsArr, windowSize, setProductsLeftOffset]);

  return (
    <ProductsStyles onMouseOver={() => setCartIsHovering(false)}>
      <div className="products">
        {products.map((product) => (
          <Product
            product={product}
            productsArr={productsArr}
            key={product.id}
          />
        ))}
      </div>
    </ProductsStyles>
  );
}
