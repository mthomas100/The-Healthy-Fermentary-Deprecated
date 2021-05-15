import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import _ from 'lodash';
import CardEl, { FRAGMENT_CARD } from './CardEl';
import DisplayError from './ErrorMessage';
import { JumbotronEl, FRAGMENT_JUMBOTRON } from './JumbotronEl';
import AddTool from './AddTool';
import Editor from './Editor';
import Pages from './Pages';

const PAGE_QUERY = gql`
  query PAGE_QUERY($pageId: ID!) {
    page(id: $pageId) {
      id
      name
      content {
        ... on ComponentPageComponentsJumbotron {
          ...fragmentJumbotron
        }
        ... on ComponentPageComponentsCard {
          ...fragmentCard
        }
      }
    }
  }
  ${FRAGMENT_JUMBOTRON}
  ${FRAGMENT_CARD}
`;

const PAGE_MUTATION = gql`
  mutation PAGE_MUTATION(
    $pageId: ID!
    $content: [PageContentDynamicZoneInput!]
  ) {
    updatePage(input: { where: { id: $pageId }, data: { content: $content } }) {
      page {
        name
      }
    }
  }
`;

export default function PageBuilder({ siteId, pageId, context }) {
  console.log({ pageId, siteId, context });

  if (pageId === undefined) {
    // look for site => homepage ==> assign pageId to that pages Id
  }

  // console.log(props);
  const { data, loading, error } = useQuery(PAGE_QUERY, {
    variables: {
      pageId,
    },
    context,
  });

  // const newContent = _.cloneDeep(content);

  const [updateComponents] = useMutation(PAGE_MUTATION, {
    context,
    refetchQueries: [
      {
        query: PAGE_QUERY,
        variables: { pageId },
        context,
      },
    ],
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const { content } = data.page;

  const components = [];
  content.map((contentItem) => {
    const contentItemType = contentItem.__typename;

    // TODO: Make this a simple list (eliminate conditional in favor of dynamically calling jumbotron called ComponentPageComponentsJumbotron - same same + easier to invoke.... won't need to explicity type out)
    // in order to do this may need to leasrn React.createElement syntax or something similar to implement "tymplating" the variable which is the name of the react component (and also the name of its import)

    switch (contentItemType) {
      case 'ComponentPageComponentsJumbotron':
        components.push(
          <JumbotronEl key={contentItemType.id} {...contentItem} />
        );
        break;

      case 'ComponentPageComponentsCard':
        components.push(<CardEl key={contentItemType.id} {...contentItem} />);
        break;

      default:
        console.log('DEFAULT');
        console.log(contentItemType);
        break;
    }
  });

  const componentsWrapped = [];

  components.map((component) => {
    componentsWrapped.push(
      <Editor
        key={`e${component.key}`}
        selectedItemId={component.props.id}
        content={content}
        pageId={pageId}
        updateComponents={updateComponents}
      >
        {component}
      </Editor>
    );
  });

  return (
    <>
      <Head>
        <title>{data.page.name}</title>
      </Head>
      <p>(Page Name: {data.page.name})</p>
      <Pages siteId={siteId} context={context} />
      {componentsWrapped}

      <AddTool
        content={content}
        pageId={pageId}
        updateComponents={updateComponents}
      />
    </>
  );
}
