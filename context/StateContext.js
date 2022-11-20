import { createContext, useState } from 'react';

const StateContext = createContext();

export function ContextProvider({ children }) {
  return (
    <StateContext.Provider value={{ item: 1 }}>
      {children}
    </StateContext.Provider>
  );
}

export default StateContext;
