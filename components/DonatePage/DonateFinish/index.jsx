import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
} from '@chakra-ui/react';
import { ChromaButton, typesList } from '../../BaseComponents/ChromaButton';

export default function DonateFinish({ isOpen, onClose, ...props }) {
  return (
    <Modal size='xl' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg='#2D2D36' color='white'>
        <ModalHeader>Donasi</ModalHeader>
        <ModalBody pb={6}>
          <Text fontSize={['sm', 'md']} mb='4' fontWeight='light'>
            Terimakasih telah melakukan pembayaran. Silahkan tunggu hingga
            sistem memverifikasi pembayaranmu dan kode CC mu akan dikirim
            otomatis oleh sistem pada email mu.
          </Text>
          <ChromaButton
            as='a'
            href='/'
            width='100%'
            types={typesList.primary}
            mt='4'
          >
            Tutup
          </ChromaButton>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
