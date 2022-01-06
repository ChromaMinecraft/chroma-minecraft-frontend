import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const ChromaToast = ({ title, subtitle, ...rest }) => {
  return (
    <>
      <Box
        {...rest}
        bg='#F0375B'
        color='white'
        py={3}
        px={5}
        rounded='md'
        width='fit-content'
        marginLeft='auto'
      >
        <Text fontSize='md' fontWeight='medium'>
          {title}
        </Text>
        <Text fontSize='sm' fontWeight='light'>
          {subtitle}
        </Text>
      </Box>
    </>
  );
};

export default ChromaToast;
