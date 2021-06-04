import styled from 'styled-components';
import { Box, Flex } from 'rebass/styled-components';
import CartStyles from './styles/CartStyles';
import CloseButton from './styles/CloseButton';
import formatMoney from '../lib/formatMoney';
// import { useUser } from './User';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';
import RemoveFromCartButton from './RemoveFromCartButton';
import ModifyCart from './ModifyCart';
import EmptyCart from './EmptyCart';
// import { Checkout } from './Checkout';

export default function Cart() {
  const { cartOpen, closeCart, cartContents } = useCart();
  cartContents.map((item) => {
    console.log(item.id);
  });
  return (
    <CartStyles open={cartOpen} width="500px">
      <header>
        Your cart
        <CloseButton onClick={closeCart}>&times;</CloseButton>
      </header>
      <ul>
        {cartContents.map((product) => (
          <Flex>
            <Box sx={{ border: '1px solid red' }} m={3} width="50%">
              <li>{product.id}</li>
              <li>{product.title}</li>
              <li>{product.quantity}</li>
            </Box>
            <RemoveFromCartButton id={product.id} width="50%" />
            <ModifyCart id={product.id} width="50%" />
          </Flex>
        ))}
      </ul>
      <EmptyCart />
      <footer>
        {/* <p>{formatMoney(calcTotalPrice(me.cart))}</p> */}
        {/* <Checkout /> */}
      </footer>
    </CartStyles>
  );
}
