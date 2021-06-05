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
  position: relative;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  width: 500px;
  min-width: 500px;
  /* height: 100vw; */
  transform: translateX(100%);
  ${(props) => props.open && `transform: translateX(0);`};
  transition: 1s all;
  /* display: grid;
  grid-template-rows: auto 1fr auto; */

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }
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
      padding: 0 5px;
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

export default function Cart() {
  const { cartOpen, closeCart, cartContents, modifyCart } = useCart();

  // const { sideSpaceSize } = useSize();
  // console.log(sideSpaceSize);

  return (
    <CartStyles open={cartOpen} py={3} px={4}>
      <HeaderStyles py={0}>
        <Text fontSize={6} fontFamily="Nunito" fontWeight="600">
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
            <ItemStyles className="item">
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
              <div className="price">$10.00</div>
              <div className="remove">remove</div>

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
      <EmptyCart />
      <Button variant="danger" onClick={closeCart}>
        X
      </Button>
      <footer>
        {/* <p>{formatMoney(calcTotalPrice(me.cart))}</p> */}
        {/* <Checkout /> */}
      </footer>
    </CartStyles>
  );
}
