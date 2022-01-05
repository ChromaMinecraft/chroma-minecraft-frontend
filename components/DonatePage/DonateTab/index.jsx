import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import React, { useState } from 'react';

import DonateForm from '../DonateForm';
import DonateHistory from '../DonateHistory';
import 'react-perfect-scrollbar/dist/css/styles.css';

const ModalTabItem = ({ children }) => {
  return (
    <Tab
      _focus={{ outline: 'none' }}
      _selected={{ color: '#F0375B', borderColor: '#F0375B' }}
      _hover={{ bg: 'none' }}
      fontWeight='medium'
      fontSize='xl'
    >
      {children}
    </Tab>
  );
};

export default function DonateTab(props) {
  const [isDetail, setIsDetail] = useState(false);
  const [isRedirectedFromDetail, setIsRedirectedFromDetail] = useState(false);
  const [detail, setDetail] = useState(0);

  return (
    <Tabs isFitted defaultIndex={isRedirectedFromDetail ? 1 : 0}>
      <TabList>
        <ModalTabItem>Donasi</ModalTabItem>
        <ModalTabItem>Cek Transaksi</ModalTabItem>
      </TabList>
      <TabPanels>
        <TabPanel>
          <DonateForm />
        </TabPanel>
        <TabPanel>
          <DonateHistory setIsDetail={setIsDetail} setDetail={setDetail} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
