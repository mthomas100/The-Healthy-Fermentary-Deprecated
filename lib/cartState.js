import { createContext, useContext, useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import useWindowSize from './useWindowSize';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer!

  // 1) PRIMARY CART FUNCTIONALITY
  // Closed cart by default
  const [cartOpen, setCartOpen] = useState(false);
  const size = useWindowSize();

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
  function openCartResponsive() {
    console.log(size);
    setCartOpen(true);
  }

  // 1) SECONDARY CART FUNCTIONALITY
  const [cartContents, setCartContents] = useState([]);

  function addToCart(product) {
    const cartProduct = _.cloneDeep(product);
    const { id } = product;

    const cartIndex = cartContents.findIndex((item) => item.id === id);
    console.log(cartIndex);

    // item doesn't exist yet in our cart
    if (cartIndex === -1) {
      cartProduct.quantity = 1;
      setCartContents((prevArray) => [...prevArray, cartProduct]);
    }

    // item already exists in our cart
    if (cartIndex !== -1) {
      cartContents[cartIndex].quantity += 1;
      setCartContents([...cartContents]);
    }
  }

  function removeFromCart(id) {
    // remove item with a specified ID from the cart
    setCartContents(cartContents.filter((item) => item.id !== id));
  }

  function modifyCart(id, value) {
    const cartIndex = cartContents.findIndex((item) => item.id === id);

    // if value is 'inc', increase quantity by 1
    if (value === 'inc') {
      cartContents[cartIndex].quantity += 1;
      setCartContents([...cartContents]);
    }

    if (value === 'dec') {
      const currentQuantity = cartContents[cartIndex].quantity;
      // if value is 'dec', and current quantity == 1, removeFromCart(id)
      if (currentQuantity === 1) {
        return removeFromCart(id);
      }
      // if value is 'dec', and current quantity >= 1 decrease quantity by 1
      if (currentQuantity >= 1) {
        cartContents[cartIndex].quantity -= 1;
        setCartContents([...cartContents]);
      }
    }
  }

  function emptyCart() {
    setCartContents([]);
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
        openCartResponsive,
        cartContents,
        addToCart,
        removeFromCart,
        emptyCart,
        modifyCart,
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
