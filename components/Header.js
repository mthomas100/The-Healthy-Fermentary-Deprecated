import styled from 'styled-components';
import Image from 'next/image';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Logo from './Logo';
import Loading from './Loading';
import { useLayout } from '../lib/layoutState';

const HeaderStyles = styled.div`
  padding: 4rem 0;
  position: relative;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%; //TODO: calculate appropriate using useLayout hook
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
  const { headerParentOffsetLeft } = useLayout();
  const { data, error, loading } = useQuery(HEADER_QUERY);
  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;
  const { company } = data.header;
  return (
    <HeaderStyles headerParentOffsetLeft={headerParentOffsetLeft}>
      <Logo company={company} />
    </HeaderStyles>
  );
}
