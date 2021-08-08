import { createContext, useContext, useEffect, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function LayoutStateProvider({ children }) {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer!const [cartOpen, setCartOpen] = useState(false);

  const [productsLeftOffset, setProductsLeftOffset] = useState(null);
  const [cartContentsSize, setCartContentsSize] = useState(null);
  const [checkoutButtonSize, setCheckoutButtonSize] = useState(null);
  const [cartHeaderSize, setCartHeaderSize] = useState(null);
  const [cartItemSize, setCartItemSize] = useState(null);
  const [cartBarSizeMinimum, setCartBarSizeMinimum] = useState(null);

  useEffect(() => {
    console.log(checkoutButtonSize, cartItemSize, cartHeaderSize);
    // 10 IN ORDER TO SHOW A LITTLE MORE THAN ONE ITEM (TO GUIDE USER IN KNOWING TO SCROLL TO SEE MORE)
    setCartBarSizeMinimum(
      checkoutButtonSize + cartItemSize + cartHeaderSize + 20
    );
  }, [
    cartBarSizeMinimum,
    cartContentsSize,
    cartContentsSize,
    checkoutButtonSize,
    cartItemSize,
  ]);

  return (
    <LocalStateProvider
      value={{
        productsLeftOffset,
        setProductsLeftOffset,
        cartContentsSize,
        setCartContentsSize,
        checkoutButtonSize,
        setCheckoutButtonSize,
        cartHeaderSize,
        setCartHeaderSize,
        cartItemSize,
        setCartItemSize,
        cartBarSizeMinimum,
        setCartBarSizeMinimum,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing   the cart local state
function useLayout(props) {
  // We use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}
export { LayoutStateProvider, useLayout };
