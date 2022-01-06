import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useToast,
} from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';

import DonateForm from '../DonateForm';
import DonateHistoryCardItem from '../DonateHistoryCardItem';

import 'react-perfect-scrollbar/dist/css/styles.css';
import { DonateContext } from '../../../context/donate';
import InfiniteScroll from 'react-infinite-scroll-component';

import * as gtag from '../../../lib/gtag';
import Axios from 'axios';
import ChromaToast from '../../BaseComponents/ChromaToast';

const ModalTabItem = ({ children }) => {
  return (
    <Tab
      _focus={{ outline: 'none' }}
      _selected={{ color: '#F0375B', borderColor: '#F0375B' }}
      _hover={{ bg: 'none' }}
      fontWeight='medium'
      fontSize='xl'
    >
      {children}
    </Tab>
  );
};

const DonateTab = ({ ...props }) => {
  const [isRedirectedFromDetail, setIsRedirectedFromDetail] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [donationHistoryData, setDonationHistoryData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const { username, modalUsernameShown } = useContext(DonateContext);

  const toast = useToast();

  const sortBy = 'desc';
  const orderBy = 'created_at';

  const ScrollLoading = () => (
    <h4 style={{ textAlign: 'center' }}>Loading...</h4>
  );

  const ScrollEnding = () => (
    <p style={{ textAlign: 'center' }}>Yay! You have seen it all</p>
  );

  const getDonationHistory = async (username) => {
    gtag.event({
      action: 'Donate Check History',
      category: 'Donate',
      label: 'Donate Label',
    });

    try {
      const result = await Axios({
        url: `/api/donate-history?username=${username}&page=${currentPage}&sort_by=${sortBy}&order_by=${orderBy}`,
        method: 'GET',
      });

      setCurrentPage(currentPage + 1);
      setDonationHistoryData((oldData) => {
        return [...oldData, ...result.data.data];
      });
      setHasMore(currentPage !== result.data.meta.total_page);
    } catch (error) {
      toast({
        isClosable: true,
        duration: null,
        position: 'top-right',
        render: () => {
          return (
            <ChromaToast
              title='Terjadi kesalahan cek transaksi'
              subtitle={error.response.data.message}
            />
          );
        },
      });
    }
  };

  useEffect(() => {
    if (username === '') return;
    if (modalUsernameShown) return;
    getDonationHistory(username);
  }, [username, modalUsernameShown]);

  return (
    <Tabs isFitted defaultIndex={isRedirectedFromDetail ? 1 : 0}>
      <TabList>
        <ModalTabItem>Donasi</ModalTabItem>
        <ModalTabItem>Cek Transaksi</ModalTabItem>
      </TabList>
      <TabPanels>
        <TabPanel>
          <DonateForm />
        </TabPanel>
        <TabPanel>
          {donationHistoryData.length > 0 && (
            <InfiniteScroll
              height='400px'
              dataLength={donationHistoryData.length}
              next={() => getDonationHistory(username)}
              hasMore={hasMore}
              loader={<ScrollLoading />}
              style={{ display: 'flex', flexDirection: 'column', gridGap: 8 }}
              endMessage={<ScrollEnding />}
            >
              {donationHistoryData.map((data, idx) => (
                <DonateHistoryCardItem {...data} key={idx} />
              ))}
            </InfiniteScroll>
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default DonateTab;
