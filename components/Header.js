import Link from 'next/link';
import { Box, Flex } from 'rebass';
import { GiHeartBottle } from 'react-icons/gi';
import { FiShoppingCart } from 'react-icons/fi';
import styled from 'styled-components';
import { flexbox, typography } from 'styled-system';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import HeaderLink from './HeaderLink';
import Button from './ButtonBottomBar';
import Cart from './Cart';

function TopBar() {
  return (
    <Flex
      mx={2}
      px={2}
      color="black"
      alignItems="center"
      sx={{
        height: 'auto',
        padding: '2em',
      }}
    >
      <HeaderLink
        fontFamilyCSS="'Reenie Beanie', cursive;"
        fontSize={['26px', '30px', '36px', '36px']}
        lineHeight={['26px', '30px', '36px', '36px']}
      >
        <GiHeartBottle
          style={{
            height: '100%',
            width: 'auto',
            paddingRight: '0.5em',
          }}
        />
        <Link href="/">Local Dehli Mead</Link>
      </HeaderLink>

      <Box mx="auto" />
      <HeaderLink variant="nav" href="#!" fontSize="30px" lineHeight="30px">
        <FiShoppingCart />
      </HeaderLink>
    </Flex>
  );
}

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

function BottomBar() {
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

export default function Header() {
  return (
    <>
      <TopBar />
      <BottomBar />
      <Cart />
    </>
  );
}
