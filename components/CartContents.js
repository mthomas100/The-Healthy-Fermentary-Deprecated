import { Divider } from '@material-ui/core';
import { useCart } from '../lib/cartState';
import CartItem from './CartItem';

export default function CartContents({ view }) {
  const { cartContents, cartIsHovering } = useCart();

  if (cartContents.length > 0) {
    return (
      <>
        {cartContents.map((product, index) => (
          <div key={product.id}>
            <CartItem
              key={product.id}
              product={product}
              index={index}
              cartIsHovering={view === 'mobile' || cartIsHovering}
            />
            <Divider style={{ margin: '0 1rem' }} light />
          </div>
        ))}
      </>
    );
  }
  return null;
}
