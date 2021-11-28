import styled from 'styled-components';
import { Box } from 'rebass/styled-components';
import Image from 'next/image';
import getSmallCloudinary from '../../util/getSmallCloudinary';

const CartSummaryItemStyles = styled(Box)`
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

export default function CartSummaryItem({ product }) {
  return (
    <CartSummaryItemStyles className="item" key={product.id}>
      <div className="image">
        <Image
          src={product.image.url}
          width="100%"
          height="100%"
          objectFit="cover"
          layout="responsive"
          alt="Picture of Item"
          placeholder="blur"
          blurDataURL={getSmallCloudinary(product.image.url)}
        />
      </div>
      <div className="title">{product.title}</div>
      <div className="price">$ {product.price}</div>
      <div className="qtyTop"> Quantity</div>
      <div className="qtyBottom">{product.quantity}</div>
      <div className="totalTop">Total</div>
      <div className="totalBottom">$ {product.price}</div>
    </CartSummaryItemStyles>
  );
}
