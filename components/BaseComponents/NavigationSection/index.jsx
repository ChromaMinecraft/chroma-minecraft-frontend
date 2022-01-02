import {
  Box,
  Collapse,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

const Links = [
  {
    label: 'Mode Permainan',
    link: '#nav-gamemode',
  },
  {
    label: 'Donasi',
    link: '#nav-donate',
  },
  {
    label: 'Vote',
    link: '#nav-donate',
  },
  {
    label: 'Bantuan',
    link: '#nav-help',
  },
  {
    label: 'Laporan',
    link: '#nav-report',
  },
];

const NavLink = ({ children, ...props }) => (
  <Link
    {...props}
    as={'a'}
    px={2}
    py={1}
    rounded={'md'}
    fontWeight='light'
    variant={'link'}
    _hover={{ textDecoration: 'none' }}
    _focus={{ outline: 'none' }}
  >
    {children}
  </Link>
);

const NavigationSection = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isTransparent, setIsTransparent] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 500) {
      setIsTransparent(false);
    } else {
      setIsTransparent(true);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  });

  return (
    <>
      <Flex
        color='white'
        bg={{
          base: 'rgb(17,17,26)',
          sm: isTransparent ? 'transparent' : 'rgb(17,17,26)',
          md: isTransparent ? 'transparent' : 'rgb(17,17,26)',
        }}
        position='fixed'
        width='100%'
        zIndex='5'
        transition='all .5s'
        boxShadow={{
          base: 'rgb(0 0 0 / 25%) 0px 0.6rem 0.4rem',
          sm: isTransparent ? 'none' : 'rgb(0 0 0 / 25%) 0px 0.6rem 0.4rem',
          md: isTransparent ? 'none' : 'rgb(0 0 0 / 25%) 0px 0.6rem 0.4rem',
        }}
        id='nav-bar'
      >
        <Container maxW='container.lg'>
          <Box py={2}>
            <Flex h={16} alignItems={'center'} justifyContent='space-between'>
              <Flex alignItems='center'>
                <Image
                  src='/img/logo.svg'
                  width='56px'
                  height='56px'
                  marginLeft={{ md: '-2' }}
                  marginRight={{ md: '2' }}
                />
                <Box display={{ base: 'none', md: 'flex' }}>
                  <Text fontSize={'lg'} fontWeight='light' as='a' href='/'>
                    <strong>Chroma</strong> Minecraft
                  </Text>
                </Box>
              </Flex>
              <HStack spacing={8} alignItems={'center'}>
                <HStack
                  as={'nav'}
                  spacing={4}
                  display={{ base: 'none', md: 'flex' }}
                  justifyItems={'flex-end'}
                >
                  {Links.map((data, idx) => (
                    <NavLink key={`link-hstack-${idx}`} href={data.link}>
                      {data.label}
                    </NavLink>
                  ))}
                </HStack>
              </HStack>
              <Box display={{ sm: 'inline', md: 'none' }}>
                <HamburgerMenu
                  isOpen={isOpen}
                  menuClicked={onToggle}
                  width={18}
                  height={15}
                  strokeWidth={1}
                  rotate={0}
                  color='white'
                  borderRadius={0}
                  animationDuration={0.5}
                />
              </Box>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
              <Box pb={4} display={{ md: 'none' }}>
                <Stack as={'nav'} spacing={4} align={'center'}>
                  {Links.map((data, idx) => (
                    <NavLink key={`link-stack-${idx}`} href={data.link}>
                      {data.label}
                    </NavLink>
                  ))}
                </Stack>
              </Box>
            </Collapse>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default NavigationSection;
