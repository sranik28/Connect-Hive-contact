import { createContext } from "react";

const CreateAuth = createContext();
const AuthProvider = ({ children }) => {
  const authData = {};
  return <CreateAuth.Provider value={authData}>{children}</CreateAuth.Provider>;
};
