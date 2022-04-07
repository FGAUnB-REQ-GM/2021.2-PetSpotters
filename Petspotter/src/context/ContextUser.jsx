import { useState, useContext, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const errorMessage =
    "O hook 'useUserContext ' deve ser utilizado em conjunto com o UserProvider.";
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(errorMessage);
  }

  return context;
};

export { UserProvider, useUserContext };
