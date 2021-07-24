import styled from 'styled-components';
import { Box, Flex } from 'rebass/styled-components';
import Image from 'next/image';
import { Divider, Typography } from '@material-ui/core';
import { useCart } from '../lib/cartState';
import calcTotalPrice from '../lib/calcTotalPrice';

const CartSummaryStyles = styled.div`
  width: 100%;
  height: fit-content;
  /* box-shadow: 0 0px 3px 0 rgba(0, 0, 0, 0.5); */
  margin-top: 2rem;
  border-radius: 2rem;
  padding: 3rem 3rem 0 3rem;
  margin: 0 auto;
`;

const ItemContainerStyles = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  .item:nth-child(even) {
    background-color: transparent;
    box-shadow: 0px 0 5px 0px rgba(0, 0, 0, 0.2);
  }
  .item:nth-child(odd) {
    background-color: transparent;
    box-shadow: 0px 0 5px 0px rgba(0, 0, 0, 0.1);
  }
`;

const ItemStyles = styled(Box)`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  height: 10rem;
  display: grid;
  grid-template-columns: 8rem 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'thumbnail title qtyTop     totalTop'
    'thumbnail price qtyBottom  totalBottom ';
  column-gap: 2rem;
  row-gap: 0.5rem;
  font-family: 'Nunito';
  font-size: 1.4rem;
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
    align-items: flex-start;
  }

  .qtyTop {
    grid-area: qtyTop;
    text-decoration: underline;
    display: flex;
    align-items: flex-end;
  }
  .qtyBottom {
    grid-area: qtyBottom;
    display: flex;
    align-items: flex-start;
  }
  .totalTop {
    grid-area: totalTop;
    text-decoration: underline;
    display: flex;
    align-items: flex-end;
  }
  .totalBottom {
    grid-area: totalBottom;
    display: flex;
    align-items: flex-start;
  }
`;

const FooterStyles = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  /* box-shadow: 0px 0 5px 0px rgba(0, 0, 0, 0.2); */
  background-color: 'transparent';
  justify-content: flex-end;
  margin-top: auto;

  .price {
    /* padding: 30px; */
    /* background-color: #f4f3f3; */
    display: flex;
    font-family: 'Nunito';
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 2rem 0;

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

function CartSummary() {
  const { cartItemTotal, cartContents, modifyCart, removeFromCart } = useCart();
  return (
    <CartSummaryStyles>
      {/* <h1 className="left">Cart Summary ({cartItemTotal} items)</h1> */}
      <h1>Cart Summary ({cartItemTotal} items)</h1>
      <ItemContainerStyles>
        {cartContents.map((product) => (
          <>
            <ItemStyles className="item" key={product.id}>
              <div className="image">
                <Image
                  src={product.image.url}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  layout="responsive"
                />
              </div>
              <div className="title">{product.title}</div>
              <div className="price">₹ {product.price}</div>
              <div className="qtyTop"> Quantity</div>
              <div className="qtyBottom">{product.quantity}</div>
              <div className="totalTop">Total</div>
              <div className="totalBottom">₹ {product.price}</div>
            </ItemStyles>
          </>
        ))}
      </ItemContainerStyles>
      <FooterStyles>
        <div className="price">
          <div className="text">SUBTOTAL</div>
          <div className="number">₹ {calcTotalPrice(cartContents)}</div>
        </div>
        <div className="price">
          <div className="text">SHIPPING</div>
          <div className="number">₹ 80</div>
        </div>
        <Divider />
        <div className="price">
          <div className="text">TOTAL</div>
          <div className="number">₹ 1050</div>
        </div>
      </FooterStyles>
    </CartSummaryStyles>
  );
}

export default CartSummary;
