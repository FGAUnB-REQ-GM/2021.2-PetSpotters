import { useState, useContext, createContext } from "react";

const ScreenContext = createContext();

const ScreenProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState(false);

  return (
    <ScreenContext.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </ScreenContext.Provider>
  );
};

const useScreenContext = () => {
  const errorMessage =
    "O hook 'useScreenContext ' deve ser utilizado em conjunto com o ScreenProvider.";
  const context = useContext(ScreenContext);

  if (context === undefined) {
    throw new Error(errorMessage);
  }

  return context;
};

export { ScreenProvider, useScreenContext };
