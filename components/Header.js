import styled from 'styled-components';
import Image from 'next/image';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Logo from './Logo';
import Loading from './Loading';

const HeaderStyles = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* margin: 4rem 0 4rem 4rem; */
  padding: 4rem 0 4rem 14rem;
  /* border: 1px solid red; */
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
  const { data, error, loading } = useQuery(HEADER_QUERY);
  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;
  const { company, image } = data.header;
  return (
    <HeaderStyles>
      <Logo company={company} />
    </HeaderStyles>
  );
}
