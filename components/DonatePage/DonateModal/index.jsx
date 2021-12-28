import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import DonateForm from '../DonateForm';
import DonateHistory from '../DonateHistory';
import DonateDetail from '../DonateDetail';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const ModalTabItem = ({ children }) => {
  return (
    <Tab
      _focus={{ outline: 'none' }}
      _selected={{ color: '#F0375B', borderColor: '#F0375B' }}
      _hover={{ bg: 'none' }}
      fontWeight='medium'
    >
      {children}
    </Tab>
  );
};

export default function DonateModal(props) {
  const [isDetail, setIsDetail] = useState(false);
  const [isRedirectedFromDetail, setIsRedirectedFromDetail] = useState(false);
  const [detail, setDetail] = useState(0);

  return (
    <Modal
      size='xl'
      isOpen={props.status}
      onClose={props.event}
      scrollBehavior='inside'
    >
      <ModalOverlay bg='#15151fb3' />
      <ModalContent
        bg='#15151F'
        color='white'
        boxShadow='0px 0px 20px 5px #F0375B'
        borderRadius='8'
      >
        <ModalHeader>
          <Text>Donasi</Text>
        </ModalHeader>
        <ModalCloseButton _focus={{ outline: 'none' }} />
        <PerfectScrollbar>
          <ModalBody>
            {isDetail && (
              <Tabs isFitted>
                <TabPanels>
                  <TabPanel>
                    <DonateDetail
                      setIsDetail={setIsDetail}
                      detail={detail}
                      setIsRedirectedFromDetail={setIsRedirectedFromDetail}
                    />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            )}
            {!isDetail && (
              <Tabs isFitted defaultIndex={isRedirectedFromDetail ? 1 : 0}>
                <TabList>
                  <ModalTabItem>Beli</ModalTabItem>
                  <ModalTabItem>Transaksi</ModalTabItem>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <DonateForm />
                  </TabPanel>
                  <TabPanel>
                    <DonateHistory
                      setIsDetail={setIsDetail}
                      setDetail={setDetail}
                    />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            )}
          </ModalBody>
        </PerfectScrollbar>
      </ModalContent>
    </Modal>
  );
}
