import { Table, Tbody, Tr, Td, Button, Flex, Spacer } from '@chakra-ui/react';
import { FaAngleLeft, FaMoneyBillWave } from 'react-icons/fa';

import RupiahFormat from '../RupiahFormat';

export default function DonateDetail(props) {
  const { detail } = props;
  return (
    <>
      <Table size='sm'>
        <Tbody>
          <Tr>
            <Td>No Transaksi</Td>
            <Td>: {detail.order_id}</Td>
          </Tr>
          <Tr>
            <Td>Username</Td>
            <Td>: {detail.username}</Td>
          </Tr>
          <Tr>
            <Td>Metode Pembayaran</Td>
            <Td>: {detail.payment_name}</Td>
          </Tr>
          <Tr>
            <Td>Status</Td>
            <Td>: {detail.donation_status}</Td>
          </Tr>
          <Tr>
            <Td>Jumlah Chroma Cash</Td>
            <Td>: {detail.amount}</Td>
          </Tr>
          <Tr>
            <Td>ٍSubtotal</Td>
            <Td>
              : <RupiahFormat value={detail.amount * 1000} />
            </Td>
          </Tr>
          <Tr>
            <Td>ٍFee</Td>
            <Td>
              : <RupiahFormat value={detail.total - detail.amount * 1000} />
            </Td>
          </Tr>
          <Tr>
            <Td>Total</Td>
            <Td>
              : <RupiahFormat value={detail.total} />
            </Td>
          </Tr>
          <Tr>
            <Td>Waktu Pembelian</Td>
            <Td>: {detail.created_at}</Td>
          </Tr>
          <Tr>
            <Td>Waktu Kadaluarsa</Td>
            <Td>: {detail.expired_at}</Td>
          </Tr>
          <Tr>
            <Td>Kode</Td>
            <Td>: {detail.redeem_code ? detail.redeem_code : '-'}</Td>
          </Tr>
        </Tbody>
      </Table>
      <Flex>
        <Button
          onClick={() => props.setIsDetail(false)}
          colorScheme='blue'
          mt='2'
          size='sm'
          leftIcon={<FaAngleLeft />}
        >
          Kembali
        </Button>
        <Spacer />
        {detail.donation_status === 'UNPAID' && (
          <Button
            as='a'
            colorScheme='green'
            mt='2'
            size='sm'
            href={detail.checkout_url}
            target='_blank'
            leftIcon={<FaMoneyBillWave />}
          >
            Bayar
          </Button>
        )}
      </Flex>
    </>
  );
}
