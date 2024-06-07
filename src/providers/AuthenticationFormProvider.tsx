import React, { useContext, createContext, useState } from 'react';

interface AuthenticationFormContextTypes {
  formEmail: string | null;
  handleResetEmail: () => void;
  handleSetEmail: (email: string) => void;
}
const AuthenticationFormProviderContext = createContext<AuthenticationFormContextTypes>({
  formEmail: '',
  handleResetEmail: () => undefined,
  handleSetEmail: () => undefined,
});

const AuthenticationFormProvider: React.FC<Children> = ({ children }) => {
  const [formEmail, setFormEmail] = useState<string | null>(null);
  const handleResetEmail = () => {
    setFormEmail(null);
  };

  const handleSetEmail = (email: string) => {
    setFormEmail(email);
  };

  return (
    <AuthenticationFormProviderContext.Provider
      value={{ formEmail, handleResetEmail, handleSetEmail }}
    >
      {children}
    </AuthenticationFormProviderContext.Provider>
  );
};

export const useAuthenticationFormState = () => {
  const authentication = useContext(AuthenticationFormProviderContext);
  return authentication;
};

export default AuthenticationFormProvider;
