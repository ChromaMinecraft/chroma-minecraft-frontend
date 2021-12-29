import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Box,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { useRouter } from 'next/router';

import DonateHistoryTable from '../DonateHistoryTable';
import DonateAlert from '../DonateAlert';

import * as gtag from '../../../lib/gtag';

export default function DonateHistory(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertStatus, setAlertStatus] = useState('');
  const [username, setUsername] = useState('');
  const [donationHistoryData, setDonationHistoryData] = useState('');
  const [donationHistoryMeta, setDonationHistoryMeta] = useState({});
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [sortBy, setSortBy] = useState('desc');
  const [orderBy, setOrderBy] = useState('');

  const router = useRouter();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleUsernameKeyPress = (e) => {
    if (e.key === 'Enter') getDonationHistory();
  };

  const getDonationHistory = async (usernameParam = '') => {
    setIsAlertShown(false);
    setIsButtonLoading(true);
    setDonationHistoryData([]);
    if (usernameParam) {
      setUsername(usernameParam);
    }
    gtag.event({
      action: 'Donate Check History',
      category: 'Donate',
      label: 'Donate Label',
    });
    try {
      const result = await Axios({
        url: `/api/donate-history?username=${
          usernameParam === '' ? username : usernameParam
        }&page=${currentPage}&sort_by=${sortBy}&order_by=${orderBy}`,
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

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      getDonationHistory();
    }
  }, [currentPage, sortBy, orderBy]);

  useEffect(() => {
    if (router.query.username != null) {
      getDonationHistory(router.query.username);
    }
  }, [router.query.username]);

  return (
    <Box width='100%'>
      {isAlertShown && (
        <DonateAlert status={alertStatus} message={alertMessage} />
      )}
      <FormControl id='username' isRequired>
        <FormLabel fontSize={['sm', 'md']} color='#ADADAD' fontWeight='light'>
          Username Minecraft
        </FormLabel>
        <Flex direction='row'>
          <Input
            backgroundColor='#24242980'
            type='text'
            placeholder='Masukkan username minecraft'
            marginRight='1'
            name='username'
            value={username}
            onChange={(e) => handleUsernameChange(e)}
            onKeyPress={(e) => handleUsernameKeyPress(e)}
            fontSize={['sm', 'md']}
          />
          <Button
            backgroundColor='#F0375B'
            isLoading={isButtonLoading}
            onClick={() => getDonationHistory()}
            fontSize={['sm', 'md']}
          >
            <FaSearch />
          </Button>
        </Flex>
      </FormControl>
      {donationHistoryData && (
        <DonateHistoryTable
          data={donationHistoryData}
          meta={donationHistoryMeta}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          setIsDetail={props.setIsDetail}
          setDetail={props.setDetail}
          sortBy={sortBy}
          setSortBy={setSortBy}
          setOrderBy={setOrderBy}
        />
      )}
    </Box>
  );
}
