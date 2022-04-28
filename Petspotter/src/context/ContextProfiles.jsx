import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);

  return (
    <ProfileContext.Provider value={{ profiles, setProfiles }}>
      {children}
    </ProfileContext.Provider>
  );
};

const useProfileContext = () => {
  const errorMessage =
    "O hook 'useProfileContext ' deve ser utilizado em conjunto com o ProfileProvider.";
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw new Error(errorMessage);
  }

  return context;
};

export { ProfileProvider, useProfileContext };
