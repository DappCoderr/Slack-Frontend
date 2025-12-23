import { createContext } from 'react';
import { useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: null,
  });

  useEffect(() => {
    const userObj = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (userObj && token) {
      setAuth({
        user: JSON.parse(userObj),
        token,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
