import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function NavStateProvider({ children }) {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer!

  // Closed cart by default
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  function closeNav() {
    setNavOpen(false);
  }

  function openNav() {
    setNavOpen(true);
  }

  return (
    <LocalStateProvider
      value={{
        navOpen,
        setNavOpen,
        toggleNav,
        closeNav,
        openNav,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the cart local state
function useNav() {
  // We use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}
export { NavStateProvider, useNav };
