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
  Button,
} from '@chakra-ui/react';
import DonateForm from '../DonateForm';
import DonateHistory from '../DonateHistory';
import DonateDetail from '../DonateDetail';

import React, { useState } from 'react';

export default function DonateModal(props) {
  const [isDetail, setIsDetail] = useState(false);
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
        <ModalHeader>Donasi</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isDetail && (
            <Tabs isFitted>
              <TabPanels>
                <TabPanel>
                  <DonateDetail setIsDetail={setIsDetail} detail={detail} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          )}
          {!isDetail && (
            <Tabs isFitted>
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
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
