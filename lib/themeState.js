import { createContext, useContext } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function ThemeProvider({ children }) {
  //   const theme = {
  //     outerWrapper: {
  //       backgroundColor: '#fed624',
  //     },
  //     site: {},
  //     sideBar: {},
  //     cartBar: {},
  //     products: {},
  //     product: {},
  //   };

  return (
    <LocalStateProvider
      value={{
        outerWrapper: {
          backgroundColor: '#fed624',
        },
        site: {
            backgroundmage: ];

        },
        sideBar: {},
        cartBar: {},
        products: {},
        product: {},
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the cart local state
function useTheme(props) {
  // We use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}
export { ThemeProvider, useTheme };
