import { Box, Flex, Image, Text, useToast } from '@chakra-ui/react';
import { useContext } from 'react';

import { ChromaButton, typesList } from '../../BaseComponents/ChromaButton';
import RupiahFormat from '../../BaseComponents/RupiahFormat';
import {
  DATE_STANDARD_FORMAT,
  DATE_TIME_STANDARD_FORMAT,
} from '../../../utils/constant';
import DateTimeFormat from '../../BaseComponents/DateTimeFormat';
import { DonateContext } from '../../../context/donate';
import DonateBadgeStatus from '../DonateBadgeStatus';
import { DonateCardActionButton } from '../DonateButton';

const DonateHistoryCardItem = ({ ...props }) => {
  const { amount, total, created_at, order_id, donation_status } = props;
  const { setDonateDetail } = useContext(DonateContext);

  const toast = useToast();
  props.toast = toast;

  const DonateDateText = ({ date }) => (
    <Text fontSize='sm' fontWeight='light'>
      <DateTimeFormat
        date={date}
        currentFormat={DATE_TIME_STANDARD_FORMAT}
        toFormat={DATE_STANDARD_FORMAT}
      />
    </Text>
  );

  return (
    <>
      <Box
        width='100%'
        color='white'
        bg='#2D2D36'
        borderRadius='8px'
        padding='4'
      >
        <Flex
          flexWrap='wrap'
          flexDirection={{ base: 'column', md: 'row' }}
          gridGap='2'
          alignItems={{ md: 'center' }}
          mb='8'
        >
          <Flex flexDirection='row' gridGap='2' alignItems='center'>
            <Image src='/img/ic-circle-flat.svg' height='24px' />
            <DonateDateText date={created_at} />
            <DonateBadgeStatus status={donation_status} />
          </Flex>
          <Text fontSize='sm' fontWeight='light'>
            {order_id}
          </Text>
        </Flex>
        <Flex
          justifyContent='space-between'
          mb='6'
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box>
            <Text fontSize='sm' fontWeight='light'>
              Jumlah Pembelian
            </Text>
            <Text fontSize='3xl' fontWeight='semibold'>
              {amount} CC
            </Text>
          </Box>
          <Box textAlign={{ base: 'start', md: 'end' }}>
            <Text fontSize='sm' fontWeight='light'>
              Total Pembayaran
            </Text>
            <RupiahFormat value={total} fontWeight='semibold' fontSize='3xl' />
          </Box>
        </Flex>
        <Flex
          justifyContent={{ base: 'center', md: 'flex-end' }}
          flexDirection={{ base: 'column', md: 'row' }}
          gridGap='2'
        >
          <DonateCardActionButton {...props} />
          <ChromaButton
            types={typesList.secondary}
            onClick={() => setDonateDetail(props)}
          >
            Lihat Detail Transaksi
          </ChromaButton>
        </Flex>
      </Box>
    </>
  );
};

export default DonateHistoryCardItem;
