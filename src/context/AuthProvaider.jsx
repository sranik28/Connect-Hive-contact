import { createContext, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

const CreateAuth = createContext();
const AuthProvider = ({ children }) => {
  const login = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authData = {
    login,
  };
  return <CreateAuth.Provider value={authData}>{children}</CreateAuth.Provider>;
};

const useAuthGlobally = () => {
  return useContext(CreateAuth);
};

export default { AuthProvider, useAuthGlobally };
