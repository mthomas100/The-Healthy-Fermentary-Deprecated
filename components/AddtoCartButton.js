import { Button } from 'rebass/styled-components';
import { useCart } from '../lib/cartState';

export default function AddtoCartButton(product) {
  const { openCart, addToCart } = useCart();

  function handleAddToCart() {
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
