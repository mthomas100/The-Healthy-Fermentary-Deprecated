import styled from 'styled-components';
import { Box, Flex, Text, Card, Button } from 'rebass/styled-components';
// import CartStyles from './styles/CartStyles';
import Image from 'next/image';
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

const CartStyles = styled(Box)`
  background: white;
  position: fixed;
  right: 0;
  overflow: hidden;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  width: 500px;
  min-width: 500px;
  /* height: 100vw; */
  transform: translateX(100%);
  ${(props) => props.open && `transform: translateX(0);`};
  transition: 1s all;
  height: 100%;
  /* display: grid;
  grid-template-rows: auto 1fr auto; */
  overflow: scroll;
  display: flex;
  flex-direction: column;
`;
const HeaderStyles = styled(Box)`
  display: grid;
  justify-content: flex-start;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
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
  }
  .price {
    grid-area: price;
    display: flex;
    align-items: center;
  }

  .remove {
    grid-area: remove;
    display: flex;
    align-items: flex-start;
    font-weight: 600;
    color: #a8a4a4;
    font-style: italic;
  }

  .quantity {
    grid-area: quantity;
    display: flex;
    justify-self: center;
    align-self: center;
    border: 1px solid #141414b9;
    width: fit-content;
    border-radius: 5px;

    .val {
      padding: 0 7px;
    }
    .quantityButton {
      padding: 0 10px;
    }
    .quantityButton.dec {
      border-right: 1px solid #141414b9;
    }
    .quantityButton.inc {
      border-left: 1px solid #141414b9;
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

const CartDummy = styled.div`
  width: 0px;
  min-width: 0px;
  ${(props) =>
    props.open &&
    `
  width: 500px;
  min-width: 500px;
  `};
  transition: 1s all;
`;

export default function Cart() {
  const { cartOpen, closeCart, cartContents, modifyCart, removeFromCart } =
    useCart();

  // const { sideSpaceSize } = useSize();
  // console.log(sideSpaceSize);

  return (
    <>
      <CartDummy open={cartOpen} />
      <CartStyles open={cartOpen} py={3} px={4}>
        <HeaderStyles py={0}>
          <Text
            fontSize={6}
            fontFamily="Nunito"
            fontWeight="600"
            onClick={closeCart}
          >
            &times;
          </Text>
          <Text
            fontSize={5}
            fontFamily="Nunito"
            fontWeight="600"
            sx={{ whiteSpace: 'nowrap' }}
          >
            Your Cart
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
                <div className="price">${product.price}</div>
                <div
                  className="remove"
                  onClick={() => removeFromCart(product.id)}
                >
                  remove
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
            <div className="number">${calcTotalPrice(cartContents)}</div>
          </div>
          <Button
            variant="business"
            fontSize={4}
            p={3}
            fontFamily="Nunito"
            letterSpacing={4}
          >
            Checkout
          </Button>
        </FooterStyles>
      </CartStyles>
    </>
  );
}
