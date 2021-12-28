import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from '@chakra-ui/react';
import React, { useState, useEffect, useRef } from 'react';

import DonateForm from '../DonateForm';
import DonateHistory from '../DonateHistory';
import DonateDetail from '../DonateDetail';
import { Link } from 'dokz';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

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
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text>Donasi</Text>
        </ModalHeader>
        <ModalCloseButton />
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
                  <Tab>Beli</Tab>
                  <Tab>Cek Transaksi</Tab>
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
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
