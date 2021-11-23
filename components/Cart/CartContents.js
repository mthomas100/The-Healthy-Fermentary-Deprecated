import { Divider } from '@material-ui/core';
import styled from 'styled-components';
import { useCart } from '../../lib/cartState';
import CartItem from './CartItem';

const CartContentsStyles = styled.div`
  min-height: 101%;
`;

export default function CartContents({ view, mode }) {
  const { cartContents, cartIsHovering } = useCart();

  return (
    <>
      {cartContents.length > 0 ? (
        <CartContentsStyles>
          {cartContents.map((product, index) => (
            <div className="cartItemWrapper" key={product.id}>
              <CartItem
                key={product.id}
                product={product}
                index={index}
                cartIsHovering={view === 'mobile' || cartIsHovering}
                mode={mode}
              />
              <Divider style={{ margin: '0 1rem' }} light />
            </div>
          ))}
        </CartContentsStyles>
      ) : (
        <CartContentsStyles>
          <CartItem cartEmpty />
        </CartContentsStyles>
      )}
    </>
  );
}
