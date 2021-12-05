import { createContext, useContext, useEffect, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function LayoutStateProvider({ children }) {
  // Hooks
  const [heroHeight, setHeroHeight] = useState(0);
  const [categoriesHeight, setCategoriesHeight] = useState(0);
  const [cartOffset, setCartOffset] = useState(0);

  // Effects
  useEffect(() => {
    setCartOffset(heroHeight + categoriesHeight + 60);
  }, [heroHeight, categoriesHeight]);

  return (
    <LocalStateProvider
      value={{
        heroHeight,
        setHeroHeight,
        cartOffset,
        setCategoriesHeight,
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
