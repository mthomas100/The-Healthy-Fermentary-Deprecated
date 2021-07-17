import Link from 'next/link';
import { Box, Flex } from 'rebass/styled-components';
import { GiHeartBottle } from 'react-icons/gi';
import HeaderLink from './HeaderLink';
import CartIcon from './CartIcon';

export default function Header() {
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
      <CartIcon />
    </Flex>
  );
}
