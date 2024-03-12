import React, { useContext, useState, createContext } from 'react';
import { useCookies } from 'react-cookie';

interface AuthenticatedUserProviderTypes {
  isAuthenticated: boolean;
  cookie: any;
  setAuthenticatedUser: (user: string) => void;
  clearUserCookie: () => void;
}

const AuthenticatedUserProviderContext = createContext<AuthenticatedUserProviderTypes>({
  isAuthenticated: false,
  cookie: null,
  setAuthenticatedUser: () => undefined,
  clearUserCookie: () => undefined,
});

const AuthenticatedUserProvider: React.FC<Children> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [cookie, setCookie, removeCookie] = useCookies(['user']);

  const clearUserCookie = () => {
    removeCookie('user');
    setIsAuthenticated(false);
  };
  const setAuthenticatedUser = (user: string) => {
    setCookie('user', user, { path: '/' });
    setIsAuthenticated(true);
  };
  return (
    <AuthenticatedUserProviderContext.Provider
      value={{ cookie, isAuthenticated, clearUserCookie, setAuthenticatedUser }}
    >
      {children}
    </AuthenticatedUserProviderContext.Provider>
  );
};

export const useAuthenticatedUser = () => {
  const authenticatedUser = useContext(AuthenticatedUserProviderContext);
  return authenticatedUser;
};

export default AuthenticatedUserProvider;
