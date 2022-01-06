import { createContext, useState } from 'react';

const DonateContext = createContext();

const DonateProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [modalUsernameShown, setModalUsernameShown] = useState(true);
  const [donateDetail, setDonateDetail] = useState({});

  const values = {
    username, setUsername, modalUsernameShown, setModalUsernameShown, donateDetail, setDonateDetail
  };

  return (
    <DonateContext.Provider value={values}>
      {children}
    </DonateContext.Provider>
  );
};

export { DonateProvider, DonateContext };
