import { createContext } from "react";

const AuthContext = createContext(null);
const hello = {
  hello: true,
};
const AuthProvider = () => {
  return <AuthContext.Provider value={hello}></AuthContext.Provider>;
};

export default AuthProvider;
