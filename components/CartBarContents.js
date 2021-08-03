import { Divider } from '@material-ui/core';
import { useCart } from '../lib/cartState';
import CartBarItem from './CartBarItem';

export default function CartBarContents() {
  const { cartContents, cartIsHovering } = useCart();

  if (cartContents.length > 0) {
    return (
      <>
        {cartContents.map((product, index) => (
          <div key={product.id}>
            <CartBarItem
              key={product.id}
              product={product}
              index={index}
              cartIsHovering={cartIsHovering}
            />
            <Divider style={{ margin: '0 1rem' }} light />
          </div>
        ))}
      </>
    );
  }
  // return <h1>add to cart plz</h1>;
  return null;
}
