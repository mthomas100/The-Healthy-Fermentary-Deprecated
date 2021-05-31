import { createContext, useContext, useEffect, useRef, useState } from 'react';
import _ from 'lodash';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer!

  // 1) PRIMARY CART FUNCTIONALITY
  // Closed cart by default
  const [cartOpen, setCartOpen] = useState(false);

  // Primary Cart Functionality
  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  // 1) SECONDARY CART FUNCTIONALITY
  const [cartContents, setCartContents] = useState([]);

  function addToCart(product) {
    const cartProduct = _.cloneDeep(product);
    const { id } = product;
    // if product id exists in cartContents, increase quantity by 1

    // if product id doesn't exist in cartContents,
    // set quantity to 1 and add product to cart

    cartProduct.quantity = 1;
    setCartContents((prev) => ({ ...prev, [id]: cartProduct }));

    // if product exists, increase quantity for product
    // if product does not exist, add id, name, quantity =1 of product
  }

  function removeFromCart({ id }) {
    // pass ID in as a prop
    // if product quanity is 1, delete product for that id
    // if product quanity > 1, decrease quantity by 1 for that id
    setCartContents();
  }

  function emptyCart() {
    setCartContents({});
  }

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    console.log(cartContents);
  }, [cartContents]);

  return (
    <LocalStateProvider
      value={{
        cartOpen,
        setCartOpen,
        toggleCart,
        closeCart,
        openCart,
        cartContents,
        addToCart,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the cart local state
function useCart(props) {
  // We use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}
export { CartStateProvider, useCart };
