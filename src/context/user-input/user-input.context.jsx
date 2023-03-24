import { createContext, useState } from "react";

export const UserInputContext = createContext({
  integralType: "",
  setIntegralType: () => {},
  infLimit: 0,
  setInfLimit: () => {},
  supLimit: 0,
  setSupLimit: () => {},
  recAmount: 0,
  setRecAmount: () => {},
});

export const UserProvider = ({ children }) => {
  const [integralType, setIntegralType] = useState("");
  const [infLimit, setInfLimit] = useState(0);
  const [supLimit, setSupLimit] = useState(0);
  const [recAmount, setRecAmount] = useState(0);

  const value = {
    integralType,
    setIntegralType,
    infLimit,
    setInfLimit,
    supLimit,
    setSupLimit,
    recAmount,
    setRecAmount,
  };
  return (
    <UserInputContext.Provider value={value}>
      {children}
    </UserInputContext.Provider>
  );
};
