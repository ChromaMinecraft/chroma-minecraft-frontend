import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
} from '@chakra-ui/react';
import { useContext } from 'react';
import DonateBadgeStatus from '../DonateBadgeStatus';
import RupiahFormat from '../../BaseComponents/RupiahFormat';
import { DonateContext } from '../../../context/donate';
import DateTimeFormat from '../../BaseComponents/DateTimeFormat';
import { DonateCardActionButton } from '../DonateButton';
import { DATE_TIME_FULL_FORMAT } from '../../../utils/constant';

const isObjectEmpty = (obj) =>
  obj &&
  Object.keys(obj).length === 0 &&
  Object.getPrototypeOf(obj) === Object.prototype;

const TextRowTitle = ({ children }) => {
  return (
    <Text fontWeight={600} fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}>
      {children}
    </Text>
  );
};

const TextRow = ({ left, right }) => {
  return (
    <Flex justifyContent='space-between'>
      <Box fontSize={{ base: 'xs', sm: 'sm', md: 'md' }} fontWeight='light'>
        {left}
      </Box>
      <Box
        fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
        fontWeight='light'
        textAlign='end'
      >
        {right}
      </Box>
    </Flex>
  );
};

export default function DonateModalDetail({ ...props }) {
  const { donateDetail, setDonateDetail } = useContext(DonateContext);

  const handleModalClose = () => setDonateDetail({});

  const saleInfo = [
    {
      left: <Text>Status Transaksi</Text>,
      right: <DonateBadgeStatus status={donateDetail.donation_status} />,
    },
    {
      left: <Text>Username</Text>,
      right: <Text>{donateDetail.username}</Text>,
    },
    {
      left: <Text>Nomor Transaksi</Text>,
      right: <Text>{donateDetail.order_id}</Text>,
    },
    {
      left: <Text>Waktu Pembelian</Text>,
      right: (
        <DateTimeFormat
          date={donateDetail.created_at}
          toFormat={DATE_TIME_FULL_FORMAT}
        />
      ),
    },
    {
      left: <Text>Waktu Pembayaran Kadaluarsa</Text>,
      right: (
        <DateTimeFormat
          date={donateDetail.expired_at}
          toFormat={DATE_TIME_FULL_FORMAT}
        />
      ),
    },
  ];

  const paymentInfo = [
    {
      left: <Text>Jumlah Chroma Cash</Text>,
      right: <Text>{donateDetail.amount} CC</Text>,
    },
    {
      left: <Text>Metode Pembayaran</Text>,
      right: <Text>{donateDetail.payment_code}</Text>,
    },
    {
      left: <Text>Sub Total</Text>,
      right: (
        <RupiahFormat value={donateDetail.total - donateDetail.total_fee} />
      ),
    },
    {
      left: <Text>Biaya Admin</Text>,
      right: <RupiahFormat value={donateDetail.total_fee} />,
    },
    {
      left: <Text fontWeight='semibold'>Total</Text>,
      right: <RupiahFormat value={donateDetail.total} fontWeight='semibold' />,
    },
  ];

  return (
    <>
      <Modal
        size='xl'
        isOpen={!isObjectEmpty(donateDetail)}
        onClose={handleModalClose}
        isCentered
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent bg='#2D2D36' color='white'>
          <ModalHeader borderBottom='2px solid #E53E3E'>
            <Text fontWeight={500}>Detail Transaksi</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody py='4'>
            <Flex flexDirection='column' gridGap={4}>
              <TextRowTitle>Informasi Pembelian</TextRowTitle>
              {saleInfo.map((item, index) => (
                <TextRow key={index} {...item} />
              ))}
              <TextRowTitle>Informasi Pembayaran</TextRowTitle>
              {paymentInfo.map((item, index) => (
                <TextRow key={index} {...item} />
              ))}
            </Flex>
            <Flex justifyContent='flex-end' mt='4'>
              <DonateCardActionButton {...donateDetail} />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
