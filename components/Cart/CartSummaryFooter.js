import { Divider } from '@material-ui/core';
import styled from 'styled-components';
import calcTotalPrice from '../../lib/calcTotalPrice';
import { useCart } from '../../lib/cartState';

const FooterStyles = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 3rem;
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

export default function CartSummaryFooter() {
  const { cartContents } = useCart();

  return (
    <FooterStyles>
      <div className="price">
        <div className="text">SUBTOTAL</div>
        <div className="number">$ {calcTotalPrice(cartContents)}</div>
      </div>
      <div className="price">
        <div className="text">SHIPPING</div>
        <div className="number">$ 6.99</div>
      </div>
      <Divider />
      <div className="price">
        <div className="text">TOTAL</div>
        <div className="number">$ {calcTotalPrice(cartContents) + 6.99}</div>
      </div>
    </FooterStyles>
  );
}
