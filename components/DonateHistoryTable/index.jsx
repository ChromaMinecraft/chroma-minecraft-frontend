import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Badge,
  useColorMode,
  Flex,
  chakra,
  HStack,
  Text,
} from '@chakra-ui/react';
import { FaAngleRight, FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';
import { useTable, useSortBy } from 'react-table';
import { useState } from 'react';
import DonateHistoryPaginator from '../DonateHistoryPaginator';

export default function DonateHistoryTable(props) {
  const numberPlus = (props.currentPage - 1) * 10;
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOrderByTime, setIsOrderByTime] = useState(true);
  const [isOrderByStatus, setIsOrderByStatus] = useState(false);

  const handleTimeHeaderClick = () => {
    setIsOrderByTime(true);
    setIsOrderByStatus(false);
    props.setOrderBy('created_at');
    if (props.sortBy === 'asc') {
      props.setSortBy('desc');
    } else {
      props.setSortBy('asc');
    }
  };

  const handleStatusHeaderClick = () => {
    setIsOrderByTime(false);
    setIsOrderByStatus(true);
    props.setOrderBy('status');
    if (props.sortBy === 'asc') {
      props.setSortBy('desc');
    } else {
      props.setSortBy('asc');
    }
  };

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
      <Badge colorScheme={color} variant="solid">
        {status}
      </Badge>
    );
  };

  const handleButtonClick = (data) => {
    props.setIsDetail(true);
    props.setDetail(data);
  };

  return (
    <>
      <Table variant="simple" size="sm" mt="5">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th
              onClick={() => handleTimeHeaderClick()}
              _hover={{
                cursor: 'pointer',
              }}
            >
              <HStack>
                <Text>Waktu</Text>{' '}
                {!isOrderByTime ? (
                  <FaSort />
                ) : props.sortBy === 'asc' ? (
                  <FaSortUp />
                ) : (
                  <FaSortDown />
                )}
              </HStack>
            </Th>
            <Th isNumeric>Jumlah</Th>
            <Th
              onClick={() => handleStatusHeaderClick()}
              _hover={{
                cursor: 'pointer',
              }}
            >
              <HStack>
                <Text>Status</Text>{' '}
                {!isOrderByStatus ? (
                  <FaSort />
                ) : props.sortBy === 'asc' ? (
                  <FaSortUp />
                ) : (
                  <FaSortDown />
                )}
              </HStack>
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.data.map((data, i) => (
            <Tr
              _hover={{
                background: colorMode === 'dark' ? 'gray.600' : 'gray.300',
                cursor: 'pointer',
                color: colorMode === 'dark' ? 'white' : 'black',
              }}
              onClick={() => handleButtonClick(data)}
              key={`donate-history-${i}`}
            >
              <Td>{i + 1 + numberPlus}</Td>
              <Td>{data.created_at}</Td>
              <Td isNumeric>{data.amount}</Td>
              <Td>{checkStatusRender(data.donation_status)}</Td>
              <Td>
                <FaAngleRight />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <DonateHistoryPaginator
        getDonationHistory={props.getDonationHistory}
        setCurrentPage={props.setCurrentPage}
        totalPage={props.meta.total_page}
      />
    </>
  );
}
