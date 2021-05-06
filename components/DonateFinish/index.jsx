import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Text,
  Button,
} from '@chakra-ui/react';

export default function DonateFinish(props) {
  return (
    <Modal size='xl' isOpen={props.status} onClose={props.event}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Donasi</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* <Flex direction='row'> */}
          <Text>
            Terimakasih telah melakukan pembayaran. Silahkan tunggu hingga
            sistem memverifikasi pembayaranmu, dan Chroma Cashmu akan dikirim
            otomatis oleh sistem.
          </Text>
          <Button
            mt='4'
            colorScheme='blue'
            w='100%'
            type='submit'
            // leftIcon={<FaMoneyBillWave />}
            fontSize='lg'
            onClick={props.event}
          >
            Tutup
          </Button>
          {/* </Flex> */}
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
