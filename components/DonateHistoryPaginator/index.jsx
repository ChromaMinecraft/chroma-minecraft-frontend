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

  const pagesQuantity = props.pageQuantity;
  const outerLimit = 1;
  const innerLimit = 1;

  const baseStyles = {
    w: 7,
    fontSize: 'sm',
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
  };

  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage);
    props.getDonationHistory(nextPage);
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
        pagesQuantity={pagesQuantity}
        onPageChange={handlePageChange}
      >
        <Container align='center' justify='center' w='full' p={4}>
          <PageGroup isInline align='center' />
        </Container>
      </Paginator>
    </>
  );
}
