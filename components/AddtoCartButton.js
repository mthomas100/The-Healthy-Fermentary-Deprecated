import { Button } from 'rebass/styled-components';
import { useCart } from '../lib/cartState';

export default function AddtoCartButton(product) {
  const { openCart, addToCart } = useCart();

  function handleAddToCart() {
    // add to cart animation (always)
    // 1) the button animates
    // 2) the shopping cart items red circle number updates
    // if the screen is big enough, openCart as sidebar
    // (if screen is too small don't)
    openCart();
    addToCart(product);
  }

  return (
    <Button variant="minimalistic" onClick={handleAddToCart}>
      {/* <Link href="/products/slug"> */}
      Add to Cart
      {/* </Link> */}
    </Button>
  );
}
