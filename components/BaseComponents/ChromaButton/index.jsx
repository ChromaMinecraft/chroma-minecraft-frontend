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

    setTimeout(() => {
      setActive(false);
    }, 750);
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
        backgroundColor={active ? '#F0375B' : 'rgba(240, 55, 91, 0.25)'}
        width={{ base: '100%', md: 'fit-content' }}
        transition='all 0.5s ease-in-out'
      >
        <Button
          {...rest}
          color='white'
          width={{ base: '100%', md: 'inherit' }}
          size={['lg']}
          backgroundColor='#F0375B'
          _hover={{ bg: '#F0375B' }}
          _focus={{ outline: 'none' }}
          _active={{ bg: '#F0375B' }}
          onClick={clicked}
        >
          {children}
        </Button>
      </Box>
    );
  };

  const Secondary = () => {
    return (
      <Box>
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
      </Box>
    );
  };

  const Link = () => {
    return (
      <Button
        as='a'
        href='minecraft://mc.chroma-gaming.xyz'
        colorScheme='white'
        variant='link'
        _focus={{ outline: 'none' }}
        onClick={(e) => {
          e.preventDefault();
          copy('mc.chroma-gaming.xyz');
          toast({
            title: 'Link berhasil dicopy',
            description: 'Periksa clipboardmu',
            status: 'info',
            duration: 1000,
          });
        }}
      >
        Mainkan Sekarang &#129122;
      </Button>
    );
  };

  return typesMap[types]();
};

export { ChromaButton, typesList };
