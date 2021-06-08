import Link from 'next/link';
import { Box, Flex } from 'rebass/styled-components';
import { GiHeartBottle } from 'react-icons/gi';
import { FiShoppingCart } from 'react-icons/fi';
import styled from 'styled-components';
import { flexbox, typography } from 'styled-system';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import HeaderLink from './HeaderLink';
import Button from './ButtonBottomBar';
import Cart from './Cart';
import { useCart } from '../lib/cartState';

const CartIconStyles = styled(Box)`
  position: relative;

  .itemCount {
    top: -3px;
    right: 6px;
    position: absolute;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    .bubble {
      position: absolute;
      background-color: tomato;
      width: 13px;
      height: 13px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      ${(props) =>
        props.cartItemTotal >= 10 &&
        `width: 15px;
         height: 15px;
      `};
    }

    .number {
      position: relative;
      top: 0px;
      font-size: 9px;
      line-height: 9px;
      color: white;
    }
  }
`;

function TopBar() {
  const { cartOpen, openCart, closeCart, cartItemTotal } = useCart();

  function cartHandler() {
    if (cartOpen) closeCart();
    if (!cartOpen) openCart();
  }

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
      <CartIconStyles
        cartItemTotal={cartItemTotal}
        fontSize={['22px', '22px', '26px', '26px']}
        lineHeight={['22px', '22px', '26px', '26px']}
      >
        {cartItemTotal >= 1 && (
          <div className="itemCount">
            <div className="bubble">
              <div className="number">{cartItemTotal}</div>
            </div>
          </div>
        )}

        <FiShoppingCart onClick={cartHandler} />
      </CartIconStyles>
    </Flex>
  );
}

export default function Header() {
  return (
    <>
      <TopBar />
    </>
  );
}
