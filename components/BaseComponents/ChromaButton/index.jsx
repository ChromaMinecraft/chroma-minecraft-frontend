import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const typesList = {
  primary: 'primary',
  secondary: 'secondary',
  link: 'link',
};

const ChromaButton = ({ types, onClick, children, ...rest }) => {
  const clicked = () => {
    onClick && onClick();
  };

  const typesMap = {
    [typesList.primary]: () => <Primary />,
    [typesList.secondary]: () => <Secondary />,
    [typesList.link]: () => <Link />,
  };

  const Primary = () => {
    return (
      <Button
        {...rest}
        color='white'
        size={['lg']}
        backgroundColor='#F0375B'
        boxShadow='0px 0px 0px 12px rgba(240, 55, 91, 0.25)'
        transition='all 0.3s ease-in-out'
        borderRadius='8px'
        _hover={{
          boxShadow: '0px 0px 0px 12px #F0375B',
          _disabled: {
            boxShadow: '0px 0px 0px 12px rgba(36, 36, 41, 0.5)',
          },
        }}
        _focus={{ outline: 'none' }}
        _active={{
          boxShadow: '0px 0px 0px 12px #F0375B',
        }}
        onClick={clicked}
        _disabled={{
          boxShadow: '0px 0px 0px 12px rgba(36, 36, 41, 0.5)',
          backgroundColor: '#242429',
          color: '#606060',
        }}
      >
        {children}
      </Button>
    );
  };

  const Secondary = () => {
    return (
      <Button
        {...rest}
        color='white'
        size={['lg']}
        backgroundColor='transparent'
        borderRadius='8px'
        border='2px solid #F0375B'
        _hover={{ bg: '#E7BAC2', borderColor: '#F0375B' }}
        _active={{ bg: '#F0375B' }}
        _focus={{ outline: 'none' }}
        width={{ base: '100%', md: 'fit-content' }}
        onClick={clicked}
      >
        {children}
      </Button>
    );
  };

  const Link = () => {
    return (
      <Button
        {...rest}
        colorScheme='white'
        variant='link'
        _focus={{ outline: 'none' }}
        onClick={onClick}
      >
        {children}
      </Button>
    );
  };

  return typesMap[types]();
};

export { ChromaButton, typesList };
