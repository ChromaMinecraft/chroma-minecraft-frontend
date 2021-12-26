import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const FloatingActionButton = ({ ...props }) => {
  return (
    <>
      <Box
        {...props}
        as='a'
        position='fixed'
        zIndex='5'
        right='8'
        bottom='8'
        _hover={{
          cursor: 'pointer',
          transform: 'scale(1.05)',
          transition: 'all .2s ease-in-out',
        }}
        _focus={{
          outline: 'none',
        }}
      >
        <Image src='/img/ic-fab.svg' />
      </Box>
    </>
  );
};

export default FloatingActionButton;
