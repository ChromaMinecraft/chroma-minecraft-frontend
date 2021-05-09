import {
  Table,
  Tbody,
  Tr,
  Td,
  Button,
  Flex,
  Spacer,
  Link,
  HStack,
  Text,
} from '@chakra-ui/react';
import { FaAngleLeft, FaMoneyBillWave } from 'react-icons/fa';
import { useRouter } from 'next/router';
import NumberFormat from 'react-number-format';

import RupiahFormat from '../RupiahFormat';

export default function DonateDetail(props) {
  const { detail } = props;
  const router = useRouter();

  const handleBackButton = (e) => {
    e.preventDefault();
    props.setIsDetail(false);
    props.setIsRedirectedFromDetail(true);
    router.push(`/?username=${detail.username}`);
  };

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
            <Td>
              :{' '}
              <NumberFormat
                value={detail.amount}
                displayType={'text'}
                thousandSeparator={'.'}
                decimalSeparator={','}
                decimalScale={0}
                fixedDecimalScale={true}
                fontSize={['sm', 'md']}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>Subtotal</Td>
            <Td>
              : <RupiahFormat value={detail.amount * 1000} />
            </Td>
          </Tr>
          <Tr>
            <Td>Fee</Td>
            <Td>
              : <RupiahFormat value={detail.total_fee} />
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
        <Link mt='7' onClick={(e) => handleBackButton(e)}>
          <HStack>
            <FaAngleLeft /> <Text fontSize={['sm', 'md']}>Kembali</Text>
          </HStack>
        </Link>
        <Spacer />
        {detail.donation_status === 'UNPAID' && (
          <Button
            as='a'
            colorScheme='green'
            mt='6'
            size='sm'
            href={detail.checkout_url}
            target='_blank'
            leftIcon={<FaMoneyBillWave />}
            fontSize={['sm', 'md']}
          >
            Bayar
          </Button>
        )}
      </Flex>
    </>
  );
}
