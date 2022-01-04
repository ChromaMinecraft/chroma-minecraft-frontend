import { createContext, useState } from 'react';

const DonateContext = createContext();

const DonateProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  return (
    <DonateContext.Provider value={{ username, setUsername }}>
      {children}
    </DonateContext.Provider>
  );
};

export { DonateProvider, DonateContext };
