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
  Icon,
} from '@chakra-ui/react';
import { FaAngleLeft, FaMoneyBillWave, FaCopy } from 'react-icons/fa';
import { useRouter } from 'next/router';
import NumberFormat from 'react-number-format';
import copy from 'copy-to-clipboard';

import RupiahFormat from '../../BaseComponents/RupiahFormat';

export default function DonateDetail(props) {
  const { detail } = props;
  const router = useRouter();

  const handleBackButtonClick = (e) => {
    e.preventDefault();
    props.setIsDetail(false);
    props.setIsRedirectedFromDetail(true);
    router.push(`/?username=${detail.username}`);
  };

  const handleCopyButtonClick = (code) => {
    const isCopied = copy(code);
    if (isCopied) alert('Kodemu telah berhasil dicopy');
  };

  return (
    <>
      <Table size='sm'>
        <Tbody fontWeight='light'>
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
            <Td>
              <HStack>
                <Text>:</Text>
                {detail.redeem_code ? (
                  <Flex
                    _hover={{
                      cursor: 'pointer',
                    }}
                    onClick={() => handleCopyButtonClick(detail.redeem_code)}
                  >
                    <Text>{detail.redeem_code}</Text>
                    <Icon as={FaCopy} marginLeft='4' />
                  </Flex>
                ) : (
                  <Text>-</Text>
                )}
              </HStack>
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <Flex>
        <Link mt='7' onClick={(e) => handleBackButtonClick(e)}>
          <HStack>
            <FaAngleLeft />{' '}
            <Text fontSize={['sm', 'md']} fontWeight='light'>
              Kembali
            </Text>
          </HStack>
        </Link>
        <Spacer />
        {detail.donation_status === 'UNPAID' && (
          <Button
            as='a'
            bg='#F0375B'
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
