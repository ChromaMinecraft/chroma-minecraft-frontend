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

export default function DonateModal(props) {
  return (
    <Modal size="xl" isOpen={props.status} onClose={props.event}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Donate</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Tabs>
            <TabList>
              <Tab>Buy</Tab>
              <Tab>Check Transaction</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <DonateForm />
              </TabPanel>
              <TabPanel>
                <p>Transaction history will be here.</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
