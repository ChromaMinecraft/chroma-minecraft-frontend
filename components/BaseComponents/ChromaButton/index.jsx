import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const typesList = {
  primary: 'primary',
  secondary: 'secondary',
  link: 'link',
};

const ChromaButton = ({ types, onClick, children, ...rest }) => {
  const [active, setActive] = useState(false);
  const clicked = () => {
    setActive(true);
    if (onClick) onClick();

    if (types != typesList.link) {
      setTimeout(() => {
        setActive(false);
      }, 750);
    }
  };

  const typesMap = {
    [typesList.primary]: () => <Primary />,
    [typesList.secondary]: () => <Secondary />,
    [typesList.link]: () => <Link />,
  };

  const Primary = () => {
    return (
      <Box
        padding='12px'
        borderRadius='8px'
        backgroundColor={
          rest.disabled
            ? 'rgba(36, 36, 41, 0.5)'
            : active
            ? '#F0375B'
            : 'rgba(240, 55, 91, 0.25)'
        }
        width={rest.width ? rest.width : ''}
        transition='all 0.5s ease-in-out'
      >
        <Button
          {...rest}
          color='white'
          size={['lg']}
          backgroundColor='#F0375B'
          _hover={{ bg: '#F0375B' }}
          _focus={{ outline: 'none' }}
          _active={{ bg: '#F0375B' }}
          onClick={clicked}
          _disabled={{
            backgroundColor: '#242429',
            color: '#606060',
          }}
        >
          {children}
        </Button>
      </Box>
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
