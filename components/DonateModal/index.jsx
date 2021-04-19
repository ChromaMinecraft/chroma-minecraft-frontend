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
} from "@chakra-ui/react";
import DonateForm from "../DonateForm";
import DonateHistory from "../DonateHistory";

export default function DonateModal(props) {
  return (
    <Modal size="xl" isOpen={props.status} onClose={props.event}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Donasi</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Tabs>
            <TabList>
              <Tab>Beli</Tab>
              <Tab>Cek Transaksi</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <DonateForm />
              </TabPanel>
              <TabPanel>{/* <DonateHistory /> */}</TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
