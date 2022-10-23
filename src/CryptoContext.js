import { createContext, useContext, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  });

  return (
    <Crypto.Provider
      value={{
        alert,
        setAlert,
      }}
    >
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};