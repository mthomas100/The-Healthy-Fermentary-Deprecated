import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import ErrorMessage from '../components/ErrorMessage';

// const PROJECTS_QUERY = gql`
//   query PROJECTS_QUERY {
//     pages {
//       content {
//         ... on ComponentPageComponentsGallery {
//           id
//           images {
//             url
//           }
//           __typename
//         }
//         ... on ComponentPageComponentsHero {
//           id
//           mainText
//           secondaryText
//           image {
//             url
//           }
//           __typename
//         }
//         ... on ComponentPageComponentsJumbotron {
//           id
//           mainText
//           secondaryText
//           __typename
//         }
//       }
//     }
//   }
// `;

// const PROJECTS_QUERY = gql`
//   query PROJECTS_QUERY {
//     page(id: "605e0f3692fc972ed406194e") {
//       name
//       content {
//         ... on ComponentPageComponentsText {
//           id
//           _id
//           main
//           __typename
//         }
//       }
//     }
//   }
// `;

// const PAGES_MUTATION = gql`
//   mutation PAGES_MUTATION {
//     updatePage(
//       input: {
//         where: { id: "605e0f3692fc972ed406194e" }
//         data: { name: "just text components UPDATED BY $$$$%%%^^^%%%$$$!!" }
//       }
//     ) {
//       page {
//         name
//         content {
//           ... on ComponentPageComponentsText {
//             id
//             _id
//             main
//             __typename
//           }
//         }
//       }
//     }
//   }
// `;

export default function Projects() {
  // const { data, error, loading } = useQuery(PROJECTS_QUERY);
  // const { data, error, loading } = useMutation(PAGES_MUTATION);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <ErrorMessage error={error} />;
  // console.log(data);
  const [updatePage, { loading }] = useMutation(PAGES_MUTATION);
  updatePage();
  return (
    <div>
      <p>Hey!</p>
    </div>
  );
}
