import { createContext, useContext, useEffect, useRef, useState } from 'react';
import _ from 'lodash';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  // 1) CART APPEARANCE AND FUNCTION;
  const [cartOpen, setCartOpen] = useState(true);
  const [cartMobileOpen, setCartMobileOpen] = useState(false);
  const [cartIsHovering, setCartIsHovering] = useState(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  function toggleCartMobile() {
    setCartMobileOpen(!cartMobileOpen);
  }

  function closeCartMobile() {
    setCartMobileOpen(false);
  }

  function openCartMobile() {
    setCartMobileOpen(true);
  }

  // 2) CART CONTENTS & MODIFICATION
  const [cartContents, setCartContents] = useState([]);
  const [cartItemTotal, setCartItemTotal] = useState(0);

  function addToCart(product) {
    const cartProduct = _.cloneDeep(product);
    const { id } = product;

    const cartIndex = cartContents.findIndex((item) => item.id === id);

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

    // if value is 'increment', increase quantity by 1
    if (value === 'increment') {
      cartContents[cartIndex].quantity += 1;
      setCartContents([...cartContents]);
    }

    if (value === 'decrement') {
      const currentQuantity = cartContents[cartIndex].quantity;
      // if value is 'decrement', and current quantity == 1, removeFromCart(id)
      if (currentQuantity === 1) {
        return removeFromCart(id);
      }
      // if value is 'decrement', and current quantity >= 1 decrease quantity by 1
      if (currentQuantity >= 1) {
        cartContents[cartIndex].quantity -= 1;
        setCartContents([...cartContents]);
      }
    }
  }

  function modifyCartQuantity(product, quantity) {
    const cartProduct = _.cloneDeep(product);
    const { id } = product;

    const cartIndex = cartContents.findIndex((item) => item.id === id);

    // item doesn't exist yet in our cart
    if (cartIndex === -1) {
      cartProduct.quantity = quantity;
      setCartContents((prevArray) => [...prevArray, cartProduct]);
    }

    // item already exists in our cart
    if (cartIndex !== -1) {
      cartContents[cartIndex].quantity += quantity;
      setCartContents([...cartContents]);
    }
  }

  function emptyCart() {
    setCartContents([]);
  }

  // 3) Checkout State
  const [isCheckingOut, setIsCheckingOut] = useState(true);

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setCartItemTotal(
      cartContents.reduce((tally, item) => tally + item.quantity, 0)
    );
    // console.log(cartIsHovering);
  }, [cartContents, cartItemTotal, cartIsHovering]);

  return (
    <LocalStateProvider
      value={{
        cartOpen,
        setCartOpen,
        toggleCart,
        closeCart,
        openCart,
        cartMobileOpen,
        setCartMobileOpen,
        toggleCartMobile,
        closeCartMobile,
        openCartMobile,
        cartIsHovering,
        setCartIsHovering,
        cartContents,
        addToCart,
        removeFromCart,
        modifyCartQuantity,
        emptyCart,
        modifyCart,
        cartItemTotal,
        isCheckingOut,
        setIsCheckingOut,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing   the cart local state
function useCart(props) {
  // We use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}
export { CartStateProvider, useCart };
