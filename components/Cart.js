import styled from 'styled-components';
import { Box, Flex, Text, Card, Button } from 'rebass/styled-components';
// import CartStyles from './styles/CartStyles';
import Image from 'next/image';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';
import { motion } from 'framer-motion';
import CloseButton from './styles/CloseButton';
import formatMoney from '../lib/formatMoney';
// import { useUser } from './User';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';
import RemoveFromCartButton from './RemoveFromCartButton';
import ModifyCart from './ModifyCart';
import EmptyCart from './EmptyCart';
import { useSize } from '../lib/sizeState';

// import { Checkout } from './Checkout';

const CartStyles = styled(motion.div)`
  background: white;
  position: fixed;
  right: 0;
  overflow: hidden;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  width: 350px;
  min-width: 350px;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  cursor: default;
`;
const HeaderStyles = styled(Box)`
  display: grid;
  justify-content: flex-start;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin-top: 20px;
`;

const ItemContainerStyles = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  .item:nth-child(even) {
    background-color: #f4f3f3;
    box-shadow: 0px 0 5px 0px rgba(0, 0, 0, 0.2);
  }
  .item:nth-child(odd) {
    background-color: #ffffff;
    box-shadow: 0px 0 5px 0px rgba(0, 0, 0, 0.1);
  }
`;

const ItemStyles = styled(Box)`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  height: 125px;
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    'thumbnail title title'
    'thumbnail price quantity'
    'thumbnail remove .';
  column-gap: 20px;
  font-family: 'Nunito';
  /* align-items: center; */
  .image {
    border-radius: 3px;
    grid-area: thumbnail;
    font-weight: 400;
  }

  .title {
    font-weight: 600;
    grid-area: title;
    display: flex;
    align-items: flex-end;
    font-size: 1.4rem;
  }
  .price {
    grid-area: price;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
  }

  .removeWrapper {
    grid-area: remove;
    height: auto;
  }

  .remove {
    font-weight: 600;
    color: #a8a4a4;
    font-style: italic;
    font-size: 1.2rem;
    /* line-height: 1rem; */
    padding: 0;
  }

  .remove:hover {
    color: #0000009d;
  }

  .quantity {
    grid-area: quantity;
    display: flex;
    justify-self: center;
    align-items: center;
    border: 1px solid #14141484;
    width: fit-content;
    border-radius: 5px;
    height: 20px;
    line-height: 18px;
    font-weight: 600;

    .val {
      padding: 0 7px;
    }
    .quantityButton {
      padding: 0 10px;
    }

    .quantityButton.dec:hover,
    .quantityButton.inc:hover {
      background-color: #91919120;
    }

    .quantityButton.inc,
    .quantityButton.dec {
      border-left: 0px solid #141414b9;
      height: 100%;
    }
  }
`;

const FooterStyles = styled.div`
  /* position: relative;
  bottom: 0;
  left: 0; */
  width: 100%;
  padding: inherit;
  box-shadow: 0px 0 5px 0px rgba(0, 0, 0, 0.2);
  background-color: white;
  justify-content: flex-end;
  margin-top: auto;

  .price {
    padding: 30px;
    /* background-color: #f4f3f3; */
    display: flex;
    font-family: 'Nunito';
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 2px;

    .text {
      width: 50%;
      display: flex;
      justify-content: flex-start;
    }

    .number {
      width: 50%;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const CartDummy = styled(motion.div)``;

const variants = {
  open: {
    x: 0,
  },
  dummyOpen: {
    width: '350px',
    minWidth: '350px',
  },
  closed: {
    x: '100%',
  },
  dummyClosed: {
    width: '0px',
    minWidth: '0px',
  },
  transition: {
    duration: 1,
  },
};

export default function Cart() {
  const { cartOpen, closeCart, cartContents, modifyCart, removeFromCart } =
    useCart();

  console.log(cartOpen);

  return (
    <>
      <CartDummy
        initial="dummyClosed"
        open={cartOpen}
        animate={cartOpen ? 'dummyOpen' : 'dummyClosed'}
        transition="transition"
        variants={variants}
      />
      <CartStyles
        initial="closed"
        open={cartOpen}
        animate={cartOpen ? 'open' : 'closed'}
        transition="transition"
        variants={variants}
      >
        <HeaderStyles>
          <Text
            fontSize="4rem"
            fontFamily="Nunito"
            fontWeight="600"
            onClick={closeCart}
            sx={{ marginLeft: '40px' }}
          >
            &times;
          </Text>
          <Text
            fontSize={5}
            fontFamily="Nunito"
            fontWeight="400"
            sx={{ whiteSpace: 'nowrap' }}
          >
            Cart
          </Text>
        </HeaderStyles>
        <ItemContainerStyles>
          {cartContents.map((product) => (
            <>
              <ItemStyles className="item" key={product.id}>
                <div className="image">
                  <Image
                    src={product.image.url}
                    width="auto"
                    height="100%"
                    objectFit="cover"
                    layout="responsive"
                  />
                </div>
                <div className="title">{product.title}</div>
                <div className="price">{product.price}</div>
                <div
                  className="removeWrapper"
                  onClick={() => removeFromCart(product.id)}
                >
                  <div className="remove">remove</div>
                </div>

                <div className="quantity">
                  <div
                    className="quantityButton dec"
                    onClick={() => modifyCart(product.id, 'dec')}
                  >
                    -
                  </div>
                  <div className="val">{product.quantity}</div>
                  <div
                    className="quantityButton inc"
                    onClick={() => modifyCart(product.id, 'inc')}
                  >
                    +
                  </div>
                </div>
              </ItemStyles>
              {/* <RemoveFromCartButton id={product.id} width="50%" />
            <ModifyCart id={product.id} width="50%" /> */}
            </>
          ))}
        </ItemContainerStyles>
        <FooterStyles>
          {/* <p>{formatMoney(calcTotalPrice(me.cart))}</p> */}
          {/* <Checkout /> */}
          <div className="price">
            <div className="text">SUBTOTAL</div>
            <div className="number">
              ${calcTotalPrice(cartContents).toFixed(2)}
            </div>
          </div>
          <Link href="/stripe">
            <Button
              variant="business"
              fontSize={4}
              p={3}
              fontFamily="Nunito"
              letterSpacing={4}
            >
              Checkout
            </Button>
          </Link>
        </FooterStyles>
      </CartStyles>
    </>
  );
}
