import { signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

const CreateAuth = createContext();
const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authData = {
    createUser,
    singIn,
  };
  return <CreateAuth.Provider value={authData}>{children}</CreateAuth.Provider>;
};

const useAuthGlobally = () => {
  return useContext(CreateAuth);
};

export default { AuthProvider, useAuthGlobally };
