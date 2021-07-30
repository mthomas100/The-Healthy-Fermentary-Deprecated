// example grid layout component
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Products from './Products';
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

const ShopContainerStyles = styled.div`
  display: flex;
  flex-direction: row;
  /* height: 100%; */
  padding: 4rem;
  margin: 0 auto;
  align-items: center;
`;

function Shop() {
  const { setCartIsHovering } = useCart();

  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ShopContainerStyles onMouseOver={() => setCartIsHovering(false)}>
      {/* <Sidebar /> */}
      <Products products={data.products} />
    </ShopContainerStyles>
  );
}

export default Shop;
