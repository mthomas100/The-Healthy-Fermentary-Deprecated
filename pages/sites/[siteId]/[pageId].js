import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import DisplayError from '../../../components/ErrorMessage';
import PageBuilder from '../../../components/PageBuilder';
import Pages from '../../../components/Pages';

const HOMEPAGE_QUERY = gql`
  query HOMEPAGE_QUERY($siteId: ID!) {
    pages(where: { site: { id: $siteId } }) {
      site {
        homePage {
          id
        }
      }
    }
  }
`;
// import this from gql variables folder (repeates in this an index page)

export default function Index({ query, user, context }) {
  let { siteId, pageId } = query;
  const { data, loading, error } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      siteId,
    },
    context,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  console.log(data);

  if (pageId === undefined) {
    pageId = data.pages[0].site.homePage.id;
  }

  return <PageBuilder siteId={siteId} context={context} pageId={pageId} />;
}
