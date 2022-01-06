import { Badge, Box, Flex, Image, Text, useToast } from '@chakra-ui/react';
import dayjs from 'dayjs';
import React from 'react';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { ChromaButton, typesList } from '../../BaseComponents/ChromaButton';
import RupiahFormat from '../../BaseComponents/RupiahFormat';
import copy from 'copy-to-clipboard';

dayjs.extend(customParseFormat);

const checkStatusRender = (status) => {
  let color;
  switch (status) {
    case 'PAID':
      color = 'green';
      break;
    case 'FAILED':
      color = 'red';
      break;
    case 'UNPAID':
      color = 'gray';
      break;
    case 'REFUND':
      color = 'yellow';
      break;
    default:
      color = 'blackAlpha';
      break;
  }
  return (
    <Badge
      colorScheme={color}
      variant='solid'
      width='min-content'
      height='min-content'
    >
      {status}
    </Badge>
  );
};

const DonatePayNow = ({ checkout_url }) => (
  <ChromaButton types={typesList.primaryFlat} href={checkout_url} as='a'>
    Bayar Sekarang
  </ChromaButton>
);

const DonateCopyCC = ({ redeem_code, toast }) => (
  <ChromaButton
    types={typesList.primaryFlat}
    onClick={() => {
      copy(redeem_code);
      toast({
        duration: 1500,
        position: 'top-right',
        render: () => {
          return (
            <Box
              bg='#F0375B'
              color='white'
              py={3}
              px={5}
              rounded='md'
              width='fit-content'
              marginLeft='auto'
            >
              <Text fontSize='md' fontWeight='medium'>
                Code CC berhasil disalin
              </Text>
              <Text fontSize='sm' fontWeight='light'>
                {redeem_code}
              </Text>
            </Box>
          );
        },
      });
    }}
  >
    Salin Kode CC
  </ChromaButton>
);

const DonateHistoryCardItem = ({ ...props }) => {
  const {
    amount,
    total,
    created_at,
    order_id,
    donation_status,
    redeem_code,
    checkout_url,
  } = props;

  const toast = useToast();

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
            <Text fontSize='sm' fontWeight='light'>
              {dayjs(created_at).format('DD MMM YYYY')}
            </Text>
            {checkStatusRender(donation_status)}
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
          {donation_status === 'PAID' ? (
            <DonateCopyCC redeem_code={redeem_code} toast={toast} />
          ) : (
            <DonatePayNow checkout_url={checkout_url} />
          )}
          <ChromaButton types={typesList.secondary}>
            Lihat Detail Transaksi
          </ChromaButton>
        </Flex>
      </Box>
    </>
  );
};

export default DonateHistoryCardItem;
