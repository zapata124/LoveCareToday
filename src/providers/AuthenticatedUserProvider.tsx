import { DocumentNode } from 'graphql';
import React, { useContext, useState, createContext } from 'react';
import { useCookies } from 'react-cookie';

interface AuthenticatedUserProviderTypes {
  isAuthenticated: boolean;
  cookie: any;
  setAuthenticatedUser: (user: DocumentNode) => void;
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
  // fix all types here
  const setAuthenticatedUser = (user: any) => {
    const formatUserData = {
      ...user,
      bookmarks: user?.bookmarks.reduce((currentBookmark: any, newBookmarks: any) => {
        currentBookmark[newBookmarks.label] = newBookmarks.label;
        return currentBookmark;
      }, {}),
    };
    // keep this the same for max age until we get it to work 100%
    setCookie('user', formatUserData, { path: '/', maxAge: 2400000 });
    // i don not think we need this here any more
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
