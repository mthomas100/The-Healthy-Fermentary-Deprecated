import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Link from 'next/link';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';

const PagesStyles = styled.div`
  margin: 10px 0;
  border: 1px solid black;

  ul {
    margin: 0;
  }
  .top {
    font-size: 14px;
    margin: 0;
    border-bottom: 1px solid black;
    background-color: hsla(0, 0%, 0%, 0.158);
    text-align: center;
  }
  .bottom {
    background-image: linear-gradient(45deg, hsla(0, 0%, 0%, 0.1) 1, white);
    margin: 0;
  }

  .siteName {
    margin: 0;
    padding-left: 15px;
    text-decoration: underline;
  }
`;

const PAGES_QUERY = gql`
  query PAGES_QUERY($siteId: ID!) {
    pages(where: { site: { id: $siteId } }) {
      name
      id
      site {
        name
        id
        homePage {
          id
        }
      }
    }
  }
`;

export default function Pages({ siteId, context }) {
  const { data, loading, error } = useQuery(PAGES_QUERY, {
    variables: {
      siteId,
    },
    context,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const { pages } = data;
  const homePageId = data.pages[0].site.homePage.id;
  return (
    <PagesStyles>
      <div className="top">Pages Component (to be placed on LHS of page)</div>
      <div className="bottom">
        <p className="siteName">{pages[0].site.name}</p>
        <ul>
          {pages.map((page) => {
            const pageId = page.id;

            if (pageId === homePageId) {
              return (
                <li>
                  <Link href={`/sites/${siteId}`}>{page.name}</Link>
                </li>
              );
            }
            return (
              <li>
                <Link href={`/sites/${siteId}/${page.id}`}>{page.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </PagesStyles>
  );
}

// add crud to make a new page
