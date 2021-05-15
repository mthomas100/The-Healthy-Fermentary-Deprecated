import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Link from 'next/link';
import styled from 'styled-components';
import DisplayError from '../components/ErrorMessage';

const PagesStyled = styled.div`
  .pagesOwner {
    font-size: 20px;
    border: 1px solid black;
    padding: 10px;
    text-align: center;
  }
`;

const PAGES_QUERY = gql`
  query PAGES_QUERY($id: ID!) {
    pages(where: { owner: { id: $id } }) {
      name
      id
    }
  }
`;

export default function Pages({ user, context }) {
  const { id, email } = user;
  console.log(context);
  const { data, loading, error } = useQuery(PAGES_QUERY, {
    variables: {
      id,
    },
    context,
  });
  if (loading) return <>Loading...</>;
  if (error) return <DisplayError error={error} />;

  return (
    <>
      <PagesStyled>
        <div className="pagesOwner">Pages belonging to user: {email}</div>
        <ul>
          {data.pages.map((page) => (
            <li key={page.id}>
              <Link href={`/page/${page.id}`}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </PagesStyled>
    </>
  );
}
