import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Badge,
  Button,
} from '@chakra-ui/react';

import { useState, useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa';

export default function DonateHistoryTable(props) {
  const [selectedDonation, setSelectedDonation] = useState({});
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

  const handleButtonClick = (data) => {
    console.log(data);
    props.setIsDetail(true);
    props.setDetail(data);
  };

  return (
    <>
      <Table variant='simple' size='sm' mt='2'>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Waktu</Th>
            <Th isNumeric>Jumlah</Th>
            <Th>Status</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.data.map((data, i) => (
            <Tr
              _hover={{
                background: 'green.100',
                cursor: 'pointer',
              }}
              onClick={() => handleButtonClick(data)}
            >
              <Td>{i + 1}</Td>
              <Td>{data.created_at}</Td>
              <Td isNumeric>{data.amount}</Td>
              <Td>{checkStatusRender(data.donation_status)}</Td>
              <Td>
                <FaAngleRight />
              </Td>
              {/* <Td>
                <Button
                  onClick={() => handleButtonClick(data)}
                  size='xs'
                  colorScheme='blue'
                >
                  Detail
                </Button>
              </Td> */}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}
