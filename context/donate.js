import { createContext, useState } from 'react';

const DonateContext = createContext();

const DonateProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [modalUsernameShown, setModalUsernameShown] = useState(true);

  const values = {
    username, setUsername, modalUsernameShown, setModalUsernameShown
  };

  return (
    <DonateContext.Provider value={values}>
      {children}
    </DonateContext.Provider>
  );
};

export { DonateProvider, DonateContext };
