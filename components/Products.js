// example grid layout component
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import Product from './Product';
import Loading from './Loading';
import { useCart } from '../lib/cartState';

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
  padding: 6rem 0;
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

function Shop() {
  const { setCartIsHovering } = useCart();

  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ProductsStyles onMouseOver={() => setCartIsHovering(false)}>
      <div className="products">
        {data.products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </ProductsStyles>
  );
}

export default Shop;
