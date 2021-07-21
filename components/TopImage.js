import styled from 'styled-components';
import Image from 'next/image';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Logo from './Logo';
import Loading from './Loading';

const TopImageStyles = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* margin-bottom: 2rem; */
  position: relative;

  .imageWrapper {
    height: 15rem;
    overflow: hidden;
    position: 'relative';
    margin: 0 0 2rem 0;
  }

  .image {
    position: 'relative';
    width: '200px';
    height: '200px';
    max-height: '200px';
    max-width: '200px';
  }
`;

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

export default function TopImage() {
  const { data, error, loading } = useQuery(HEADER_QUERY);
  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;
  const { company, image } = data.header;
  return (
    <TopImageStyles>
      <div className="imageWrapper">
        <Image
          src={image.url}
          objectFit="cover"
          layout="responsive"
          height="100%"
          width="100%"
          className="image"
        />
      </div>
    </TopImageStyles>
  );
}
