import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { useEffect } from 'react';
import Product from './Product';
import Loading from './Loading';
import { useCart } from '../lib/cartState';
import { useWindowSize } from '../lib/useWindowSize';
import { useLayout } from '../lib/layoutState';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    products {
      id
      title
      description
      image {
        url
      }
      price
      slug
    }
  }
`;

const ProductsStyles = styled.div`
  display: flex;
  flex-direction: row;
  padding: 22rem 0 6rem 0;
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

function Products() {
  const productsArr = [];
  const { setCartIsHovering } = useCart();
  const { setProductsLeftOffset } = useLayout();
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  const windowSize = useWindowSize();
  console.log(data);

  // useEffect(() => {
  //   const firstProduct = productsArr[0];
  //   setProductsLeftOffset(firstProduct.current.offsetLeft);
  // }, [productsArr, windowSize, setProductsLeftOffset]);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ProductsStyles onMouseOver={() => setCartIsHovering(false)}>
      <div className="products">
        {data.products.map((product) => (
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

export default Products;
