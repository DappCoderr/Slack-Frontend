import { createContext } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    user: null,
    token: null,
    isLoading: true,
  });

  const logout = async () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setAuth({
      user: null,
      token: null,
      isLoading: false,
    });
    navigate('/auth/signin');
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (user && token) {
      setAuth({
        user: JSON.parse(user),
        token,
        isLoading: false,
      });
    } else {
      setAuth({
        user: null,
        token: null,
        isLoading: false,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
