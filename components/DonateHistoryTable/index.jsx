import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Badge,
} from '@chakra-ui/react';

export default function DonateHistoryTable(props) {
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
      <Badge colorScheme={color} variant='outline'>
        {status}
      </Badge>
    );
  };

  return (
    <>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Waktu</Th>
            <Th>Jumlah</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.data.map((data, i) => (
            <Tr
              _hover={{
                background: 'green.100',
                cursor: 'pointer',
              }}
            >
              <Td>{i + 1}</Td>
              <Td>{data.created_at}</Td>
              <Td>{data.amount}</Td>
              <Td>{checkStatusRender(data.donation_status)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}
