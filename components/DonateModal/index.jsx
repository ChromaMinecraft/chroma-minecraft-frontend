import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function DonateModal(props) {
  return (
    <Modal size="xl" isOpen={props.status} onClose={props.event}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Donate</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fringilla consectetur magna, in ullamcorper purus consectetur sed.
          Proin eget tincidunt lorem. Nulla at dui nec tellus ultricies porta.
          Aenean sit amet tellus vulputate, commodo nunc non, sagittis mi.
          Maecenas tempor, nunc id ultrices auctor, diam nulla mattis ante, in
          cursus quam libero vel ipsum. Curabitur fringilla augue eu enim
          lobortis condimentum eu non elit. Phasellus ultricies quam sem, vitae
          laoreet orci accumsan in. Nulla mollis enim vel ligula blandit
          venenatis.
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
