import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Logo from './Logo';
import Loading from './Loading';
import { useLayout } from '../lib/layoutState';

const HeaderStyles = styled.div`
  /* z-index: 100; */
  position: absolute;
  top: 0;
  left: 0;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: 'Reenie Beanie';
  font-size: 45px;
  background-color: #1d1d1d;

  a {
    color: white;
  }
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
    <HeaderStyles pathname={pathname}>
      <Link href="/">
        <a>{company}</a>
      </Link>
    </HeaderStyles>
  );
}
