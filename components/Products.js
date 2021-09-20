import styled from 'styled-components';
import { useEffect, useLayoutEffect, useState } from 'react';
import Product from './Product';
import { useCart } from '../lib/cartState';
import { useWindowSize } from '../lib/useWindowSize';
import useComponentSize from '../lib/useComponentSize';

const ProductsStyles = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6rem 12rem;
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
  const { setCartIsHovering } = useCart();
  const [contentSizeArray, setContentSizeArray] = useState([]);
  const [maxContentHeight, setMaxContentHeight] = useState(undefined);

  useLayoutEffect(() => {
    setMaxContentHeight(Math.max(...contentSizeArray));
  }, [contentSizeArray, maxContentHeight]);

  return (
    <ProductsStyles onMouseOver={() => setCartIsHovering(false)}>
      <div className="products">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            setContentSizeArray={setContentSizeArray}
            maxContentHeight={maxContentHeight}
          />
        ))}
      </div>
    </ProductsStyles>
  );
}
