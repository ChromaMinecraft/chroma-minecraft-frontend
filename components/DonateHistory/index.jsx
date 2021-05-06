import {
  FormControl,
  FormLabel,
  Input,
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
import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function DonateHistory(props) {
  const [isAlertShown, setIsAlertShown] = useState(false);

  useEffect(() => {
    const getDonationHistory = async () => {
      setIsAlertShown(false);
      e.preventDefault();
      let result;
      try {
        const res = await Axios({
          url: '/api/donate-history',
          method: 'GET',
        });
        result = res.data;
        console.log(result);
        setAlertStatus('success');
      } catch (error) {
        result = error.response.data;
        setAlertStatus('error');
      }
      setAlertMessage(result.message);
      setIsAlertShown(true);
    };
  }, []);
  return (
    <>
      {isAlertShown && (
        <DonateAlert status={alertStatus} message={alertMessage} mb='1' />
      )}
      <form>
        <FormControl id='username' isRequired>
          <FormLabel>Username Minecraft</FormLabel>
          <Input type='text' placeholder='Masukkan username minecraft.' />
        </FormControl>
        <Button
          mt='4'
          colorScheme='blue'
          w='100%'
          type='submit'
          leftIcon={<FaSearch />}
        >
          Cari
        </Button>
      </form>
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
          <Tr
            _hover={{
              background: 'green.100',
              cursor: 'pointer',
            }}
          >
            <Td>1</Td>
            <Td>18/04/2021 05:41</Td>
            <Td>50</Td>
            <Td>
              <Badge colorScheme='green' variant='outline'>
                Sukses
              </Badge>
            </Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>19/04/2021 05:41</Td>
            <Td>55</Td>
            <Td>
              <Badge colorScheme='red' variant='outline'>
                Batal
              </Badge>
            </Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>20/04/2021 05:41</Td>
            <Td>60</Td>
            <Td>
              <Badge colorScheme='yellow' variant='outline'>
                Menunggu
              </Badge>
            </Td>
          </Tr>
          <Tr>
            <Td>4</Td>
            <Td>21/04/2021 05:41</Td>
            <Td>65</Td>
            <Td>
              <Badge colorScheme='cyan' variant='outline'>
                Proses
              </Badge>
            </Td>
          </Tr>
          <Tr>
            <Td>5</Td>
            <Td>22/04/2021 05:41</Td>
            <Td>70</Td>
            <Td>
              <Badge colorScheme='teal' variant='outline'>
                Kadaluarsa
              </Badge>
            </Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>#</Th>
            <Th>Time</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
}
