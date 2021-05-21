import Link from 'next/link';
import { Box, Flex, Text } from 'rebass';
import { BiBeer } from 'react-icons/bi';
import styled from 'styled-components';
import { layout } from 'styled-system';

const HeaderWrapper = styled.div`
  ${layout}
`;

export default function Header() {
  return (
    <HeaderWrapper
      height={{
        xs: '100px',
        sm: '200px',
        md: '300px',
        lg: '400px',
        xl: '500px',
      }}
    >
      <Flex px={2} color="white" bg="black" alignItems="center">
        <BiBeer />
        <Box mx="auto" />
        <Link variant="nav" href="#!">
          Profile
        </Link>
      </Flex>
    </HeaderWrapper>
  );
}
