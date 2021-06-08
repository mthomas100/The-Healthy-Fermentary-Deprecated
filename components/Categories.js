import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { flexbox, typography } from 'styled-system';
import { Box, Flex } from 'rebass/styled-components';
import Button from './ButtonBottomBar';

const BottomBarStyles = styled.div`
  ${flexbox}
  ${typography}
  display: flex;
  margin: 0 auto;
  margin-left: 16px;
`;

const CATEGORIES_QUERY = gql`
  query CATEGORIES_QUERY {
    categories {
      name
      id
    }
  }
`;

export default function Categories() {
  const { data, error, loading } = useQuery(CATEGORIES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <BottomBarStyles
      justifyContent="left"
      fontSize={0}
      lineHeight="30px"
      width="100%"
    >
      <Flex flexWrap="wrap">
        {data.categories.map((category) => (
          <Button key={category.id}>{category.name}</Button>
        ))}
      </Flex>
    </BottomBarStyles>
  );
}
