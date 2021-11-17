import { createContext, useContext, useEffect, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function LayoutStateProvider({ children }) {
  // Hooks
  const [heroHeight, setHeroHeight] = useState(0);
  const [cartOffset, setCartOffset] = useState(0);

  // Effects
  useEffect(() => {
    setCartOffset(heroHeight + 40);
  }, [heroHeight]);

  return (
    <LocalStateProvider
      value={{
        heroHeight,
        setHeroHeight,
        cartOffset,
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
