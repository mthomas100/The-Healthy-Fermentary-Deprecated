import styled from 'styled-components';
import { Flex } from 'rebass/styled-components';
import Image from 'next/image';
import { useCart } from '../lib/cartState';
import CartSummaryFooter from './CartSummaryFooter';
import CheckoutHeader from './CheckoutHeader';
import CartSummaryItem from './CartSummaryItem';

const CartSummaryStyles = styled.div`
  width: 100%;
  height: fit-content;
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

function CartSummary() {
  const { cartItemTotal, cartContents, modifyCart, removeFromCart } = useCart();
  return (
    <CartSummaryStyles>
      {/* <h1 className="left">Cart Summary ({cartItemTotal} items)</h1> */}
      <CheckoutHeader>Cart Summary ({cartItemTotal} items)</CheckoutHeader>
      <ItemContainerStyles>
        {cartContents.map((product) => (
          <CartSummaryItem product={product} />
        ))}
      </ItemContainerStyles>
      <CartSummaryFooter />
    </CartSummaryStyles>
  );
}

export default CartSummary;
