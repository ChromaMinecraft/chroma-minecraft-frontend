import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const FloatingActionButtonItem = ({ ...props }) => {
  return (
    <Box
      {...props}
      as='a'
      position='fixed'
      zIndex='5'
      right='8'
      bottom='8'
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
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
  );
};

const FloatingActionButton = ({ children, ...props }) => {
  return (
    <>
      {children}
      <FloatingActionButtonItem />
    </>
  );
};

export default FloatingActionButton;
