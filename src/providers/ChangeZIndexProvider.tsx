import React, { useState, createContext, useContext } from 'react';

interface ChangeIndexContext {
  change: boolean;
  changeIndex: () => void;
}

const ChangeIndexContext = createContext<ChangeIndexContext>({
  change: false,
  changeIndex: () => undefined,
});

const ChangeZIndex: React.FC<Children> = ({ children }) => {
  const [change, setChange] = useState<boolean>(false);
  const changeIndex = () => {
    setChange(!change);
  };
  return (
    <ChangeIndexContext.Provider value={{ change, changeIndex }}>
      {children}
    </ChangeIndexContext.Provider>
  );
};

export const useChangeZIndex = () => {
  const changeIndex = useContext(ChangeIndexContext);
  return changeIndex;
};

export default ChangeZIndex;
