import { createContext, useContext, useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import useWindowSize from './useWindowSize';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function SizeStateProvider({ children }) {
  // This is our own custom pr  ovider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer!

  // windowsize { height, width }
  const windowSize = useWindowSize();
  // productSize { height, width }
  const [productSize, setProductSize] = useState(undefined);
  // TODO: specific to a component but coud be universal? an object width the heights, widths of all components needed to be kept track of?
  const [sideSpaceSize, setSideSpaceSize] = useState(undefined);

  useEffect(() => {
    if (windowSize?.width && productSize?.width) {
      setSideSpaceSize({ width: windowSize.width - productSize.width });
    }
    return () => {};
  }, [productSize, windowSize]);

  return (
    <LocalStateProvider
      value={{
        windowSize,
        productSize,
        setProductSize,
        sideSpaceSize,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the cart local state
function useSize(props) {
  // We use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}
export { SizeStateProvider, useSize };
