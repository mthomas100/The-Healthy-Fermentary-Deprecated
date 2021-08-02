import { createContext, useContext, useEffect, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function LayoutStateProvider({ children }) {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer!const [cartOpen, setCartOpen] = useState(false);

  const [headerParentOffsetLeft, setHeaderParentOffsetLeft] = useState(null);

  useEffect(() => {
    console.log(headerParentOffsetLeft);
  }, [headerParentOffsetLeft]);

  return (
    <LocalStateProvider
      value={{
        headerParentOffsetLeft,
        setHeaderParentOffsetLeft,
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
