import { useState } from 'react';
import { useCart } from '../lib/cartState';

export default function AddToCart({ product }) {
  const { modifyCartQuantity, openCart } = useCart();
  const [selectValue] = useState(1);

  function handleAddToCart() {
    modifyCartQuantity(product, selectValue); // TODO: Needs to add X to whats already there
    openCart();
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <button
      type="button"
      className="bg-gray-800 text-gray-100 font-semibold uppercase git text-center py-4 rounded-lg "
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
}
