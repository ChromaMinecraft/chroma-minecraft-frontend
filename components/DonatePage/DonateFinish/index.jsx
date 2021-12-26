import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
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
          <Text fontSize={['sm', 'md']}>
            Terimakasih telah melakukan pembayaran. Silahkan tunggu hingga
            sistem memverifikasi pembayaranmu, dan kode CCmu akan dikirim
            otomatis oleh sistem.
          </Text>
          <Button
            as='a'
            mt='4'
            colorScheme='blue'
            w='100%'
            type='submit'
            fontSize='lg'
            href='/'
            fontSize={['sm', 'md']}
          >
            Tutup
          </Button>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
