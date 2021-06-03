import styled from 'styled-components';
import { Box, Flex } from 'rebass/styled-components';
import CartStyles from './styles/CartStyles';
import CloseButton from './styles/CloseButton';
import formatMoney from '../lib/formatMoney';
// import { useUser } from './User';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';
import RemoveFromCart from './RemoveFromCart';
import RemoveFromCartButton from './RemoveFromCartButton';
// import { Checkout } from './Checkout';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

function CartItem({ cartItem }) {
  const { product } = cartItem;
  if (!product) return null;
  return (
    <CartItemStyles>
      <img
        width="100"
        src={product.photo.image.publicUrlTransformed}
        alt={product.name}
      />
      <div>
        <h3>{product.name}</h3>
        <p>
          {formatMoney(product.price * cartItem.quantity)}-
          <em>
            {cartItem.quantity} &times; {formatMoney(product.price)} each
          </em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
}

export default function Cart() {
  const { cartOpen, closeCart, cartContents } = useCart();
  cartContents.map((item) => {
    console.log(item.id);
  });
  return (
    <CartStyles open={cartOpen}>
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
          </Flex>
        ))}
      </ul>
      <footer>
        {/* <p>{formatMoney(calcTotalPrice(me.cart))}</p> */}
        {/* <Checkout /> */}
      </footer>
    </CartStyles>
  );
}
