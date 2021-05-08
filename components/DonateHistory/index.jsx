import { FormControl, FormLabel, Input, Button, Flex } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Axios from 'axios';

import DonateHistoryTable from '../DonateHistoryTable';
import DonateAlert from '../DonateAlert';

export default function DonateHistory(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertStatus, setAlertStatus] = useState('');
  const [username, setUsername] = useState(null);
  const [donationHistoryData, setDonationHistoryData] = useState(null);
  const [donationHistoryMeta, setDonationHistoryMeta] = useState({});
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const handleUsernameChange = (e) => {
    console.log(`Username changed into ${e.target.value}`);
    setUsername(e.target.value);
  };

  const getDonationHistory = async (currentPage) => {
    setCurrentPage(currentPage);
    setIsAlertShown(false);
    setIsButtonLoading(true);
    console.log(username);
    console.log(currentPage);
    try {
      const result = await Axios({
        url: `/api/donate-history?username=${username}&page=${currentPage}`,
        method: 'GET',
      });
      setDonationHistoryData(result.data.data);
      setDonationHistoryMeta(result.data.meta);
      if (!result.data.data.length) {
        setAlertStatus('warning');
        setAlertMessage('Data kosong');
        setIsAlertShown(true);
      }
    } catch (error) {
      setDonationHistoryData([]);
      setAlertStatus('error');
      setAlertMessage(error.response.data.message);
      setIsAlertShown(true);
    }
    setIsButtonLoading(false);
  };

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
            onChange={(e) => handleUsernameChange(e)}
          />
          <Button
            colorScheme='blue'
            isLoading={isButtonLoading}
            onClick={() => getDonationHistory(1)}
          >
            <FaSearch />
          </Button>
        </Flex>
      </FormControl>
      {donationHistoryData && (
        <DonateHistoryTable
          data={donationHistoryData}
          meta={donationHistoryMeta}
          getDonationHistory={getDonationHistory}
          currentPage={currentPage}
          setIsDetail={props.setIsDetail}
          setDetail={props.setDetail}
        />
      )}
    </>
  );
}
