import { createContext, useContext, useState } from "react";

// Create context
export const ModalContext = createContext();

// Provider
export function ModalProvider({ children }) {
  const [modelIsOpen, setModelIsOpen] = useState(false);



  return (
    <ModalContext.Provider value={{ modelIsOpen, setModelIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
