import styled from 'styled-components';
import Image from 'next/image';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Logo from './Logo';
import Loading from './Loading';
import { useLayout } from '../lib/layoutState';

const HeaderStyles = styled.div`
  padding: 10rem 0;
  position: absolute;
  z-index: 100;
  left: ${(props) =>
    props.pathname === '/'
      ? props.productsLeftOffset
      : props.checkoutLeftOffset}px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 300px; //TODO: calculate appropriate using useLayout hook
`;

// TODO: get this on initial site query
const HEADER_QUERY = gql`
  query HEADER_QUERY {
    header {
      company
      image {
        url
      }
    }
  }
`;

export default function Header() {
  const { productsLeftOffset, checkoutLeftOffset } = useLayout();
  const { data, error, loading } = useQuery(HEADER_QUERY);
  const { pathname } = useRouter();

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;
  const { company } = data.header;
  return (
    <HeaderStyles
      productsLeftOffset={productsLeftOffset}
      checkoutLeftOffset={checkoutLeftOffset}
      pathname={pathname}
    >
      <Logo company={company} />
    </HeaderStyles>
  );
}
