import { FormControl, FormLabel, Input, Button, Flex } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Axios from 'axios';

import DonateHistoryTable from '../DonateHistoryTable';
import DonateAlert from '../DonateAlert';

export default function DonateHistory(props) {
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertStatus, setAlertStatus] = useState('');
  const [username, setUsername] = useState(null);
  const [donationHistory, setDonationHistory] = useState([]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const getDonationHistory = async () => {
    setIsAlertShown(false);
    try {
      const res = await Axios({
        url: `/api/donate-history?username=${username}`,
        method: 'GET',
      });
      setDonationHistory(res.data.data);
      setAlertStatus('success');
      setAlertMessage(res.data.message);
    } catch (error) {
      setAlertStatus('error');
      setAlertMessage(error.response.data.message);
    }
    setIsAlertShown(true);
  };

  // useEffect(() => {

  // }, [])

  return (
    <>
      {isAlertShown && (
        <DonateAlert status={alertStatus} message={alertMessage} mb='1' />
      )}
      <FormControl id='username' isRequired>
        <FormLabel>Username Minecraft</FormLabel>
        <Flex direction='row'>
          <Input
            type='text'
            placeholder='Masukkan username minecraft.'
            marginRight='1'
            name='username'
            value={username}
            onChange={handleUsernameChange}
          />
          <Button colorScheme='blue' onClick={getDonationHistory}>
            <FaSearch />
          </Button>
        </Flex>
      </FormControl>
      <DonateHistoryTable data={donationHistory} />
    </>
  );
}
