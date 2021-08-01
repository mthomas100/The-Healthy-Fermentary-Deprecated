import styled from 'styled-components';
import Image from 'next/image';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Logo from './Logo';
import Loading from './Loading';
import { useLayout } from '../lib/layoutState';

const HeaderStyles = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* margin: 4rem 0 4rem 4rem; */
  padding: 4rem 0;
  /* border: 1px solid red; */
  position: absolute;
  left: ${(props) => props.productsLeftOffset}px;
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
  const { productsLeftOffset } = useLayout();
  const { data, error, loading } = useQuery(HEADER_QUERY);
  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;
  const { company } = data.header;
  return (
    <HeaderStyles productsLeftOffset={productsLeftOffset}>
      <Logo company={company} />
    </HeaderStyles>
  );
}
