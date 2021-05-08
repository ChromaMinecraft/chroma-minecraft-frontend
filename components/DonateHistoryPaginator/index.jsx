import { Spacer, Text } from '@chakra-ui/layout';
import {
  Paginator,
  Previous,
  Next,
  PageGroup,
  Container,
} from 'chakra-paginator';

import { useState } from 'react';

export default function DonateHistoryPaginator(props) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = props.totalPage;
  const outerLimit = 1;
  const innerLimit = 1;

  const baseStyles = {
    w: 7,
    fontSize: 'sm',
    color: 'black',
  };

  const normalStyles = {
    ...baseStyles,
    bg: 'gray.100',
  };

  const activeStyles = {
    ...baseStyles,
    bg: 'gray.500',
  };

  const separatorStyles = {
    w: 7,
    bg: 'gray.200',
    color: 'black',
  };

  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage);
    props.setCurrentPage(nextPage);
    // props.getDonationHistory(nextPage);
  };

  return (
    <>
      <Paginator
        activeStyles={activeStyles}
        innerLimit={innerLimit}
        outerLimit={outerLimit}
        currentPage={currentPage}
        normalStyles={normalStyles}
        separatorStyles={separatorStyles}
        pagesQuantity={totalPage}
        onPageChange={handlePageChange}
      >
        <Container align='center' justify='space-between' w='full' p={4}>
          <Text>
            Halaman <b>{currentPage}</b>/<b>{totalPage}</b>
          </Text>
          <Spacer />
          <PageGroup isInline align='center' />
        </Container>
      </Paginator>
    </>
  );
}
