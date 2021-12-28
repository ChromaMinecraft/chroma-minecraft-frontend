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

  const totalPage = props.totalPage || 1;
  const outerLimit = 1;
  const innerLimit = 2;

  const baseStyles = {
    w: 7,
    fontSize: 'sm',
    color: 'black',
  };

  const normalStyles = {
    ...baseStyles,
    bg: '#24242980',
    color: 'white',
  };

  const activeStyles = {
    ...baseStyles,
    bg: '#F0375B',
    color: 'white',
  };

  const separatorStyles = {
    w: 7,
    bg: '#24242980',
    color: 'white',
  };

  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage);
    props.setCurrentPage(nextPage);
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
          <Previous backgroundColor='#F0375B'>Previous</Previous>
          <PageGroup isInline align='center' />
          <Next backgroundColor='#F0375B'>Next</Next>
        </Container>
      </Paginator>
    </>
  );
}
