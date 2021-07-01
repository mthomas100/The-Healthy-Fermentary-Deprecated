import { createContext, useContext, useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import useForm from './useForm';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CheckoutStateProvider({ children }) {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer!
  // 1) PRIMARY CART FUNCTIONALITY

  // REFACTORING OPPORTUNITY
  // Make the below fields populate dynamically. So if something uses the useCheckout
  // context call, its value is stored as a key dynamically

  const { inputs, handleChange, resetForm } = useForm({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    region: '',
    zipCode: '',
    country: '',
  });

  useEffect(() => {
    // console.log(inputs);
  }, [inputs]);

  return (
    <LocalStateProvider
      value={{
        inputs,
        handleChange,
        resetForm,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the cart local state
function useCheckout(props) {
  // We use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}
export { CheckoutStateProvider, useCheckout };
