import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Link from 'next/link';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';

const PagesStyled = styled.div`
  .pagesOwner {
    font-size: 20px;
    border: 1px solid black;
    padding: 10px;
    text-align: center;
  }
`;

const SITES_QUERY = gql`
  query SITES_QUERY($id: ID!) {
    sites(where: { owner: { id: $id } }) {
      name
      id
    }
  }
`;

export default function Sites({ user, context }) {
  const { id, email } = user;
  console.log(context);
  const { data, loading, error } = useQuery(SITES_QUERY, {
    variables: {
      id,
    },
    context,
  });
  if (loading) return <>Loading...</>;
  if (error) return <DisplayError error={error} />;

  console.log(data);

  return (
    <>
      <PagesStyled>
        <div className="pagesOwner">Sites belonging to user: {email}</div>
        <ul>
          {data.sites.map((site) => (
            <li key={site.id}>
              <Link href={`/sites/${site.id}`}>{site.name}</Link>
            </li>
          ))}
        </ul>
      </PagesStyled>
    </>
  );
}
