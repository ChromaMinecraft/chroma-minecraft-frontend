import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const HelpItem = ({ children }) => {
  return (
    <Box
      width={{ base: '100%', md: 'sm', lg: 'md' }}
      bg='rgba(255, 255, 255, 0.1)'
      borderRadius='14px'
      padding={1}
    >
      <Flex alignItems='center' gridGap='4' height='100%' padding='12px'>
        {children}
      </Flex>
    </Box>
  );
};

const HelpSection = () => {
  return (
    <Flex
      color='white'
      bgImage={{ base: 'url("/img/landing-page-bantuan.png")' }}
      backgroundSize={{ base: 'cover' }}
      backgroundRepeat='no-repeat'
      backgroundPosition='center'
      id='nav-help'
    >
      <Container maxW='container.lg'>
        <Box marginX='auto' paddingY={{ base: '40px', md: '80px' }}>
          <Flex
            justifyContent='space-between'
            flexDirection={{ base: 'column', md: 'row' }}
            flex={1}
          >
            <Box w={{ base: '100%', md: '40%' }}>
              <Text
                fontSize={['sm', 'md', 'md', 'lg']}
                fontWeight='light'
                textTransform='uppercase'
                letterSpacing='4.5px'
              >
                Bantuan
              </Text>
              <Text
                fontSize={['2xl', '2xl', '3xl', '4xl']}
                fontWeight='bold'
                marginTop='4'
                marginBottom='8'
                lineHeight={{ base: '24px', sm: '32px', md: '48px' }}
              >
                Ketemu yang bikin bingung pas main?
              </Text>
              <Text
                fontSize={['md']}
                fontWeight='light'
                noOfLines={{ base: '7', sm: '4' }}
              >
                Tenang kita ada wiki buat yang mau baca dan cari tahu sendiri,
                atau hit aja di community discord kami (budayakan membaca).
                Terakhir kalau ada ide atau saran jangan lupa drop ya
              </Text>
            </Box>
            <Box w={{ base: '100%', md: '60%' }} mt={{ base: 5, md: 0 }}>
              <VStack spacing={6} align='stretch' alignItems='flex-end'>
                <HelpItem>
                  <Box flexShrink={0}>
                    <Image src='/img/ic-sound.svg' />
                  </Box>
                  <Text fontSize={['md']} fontWeight='light'>
                    <strong>
                      Channel{' '}
                      <Link
                        href='https://discord.chroma-gaming.xyz'
                        target='_blank'
                      >
                        <Text as='u'>Discord</Text>
                      </Link>
                    </strong>
                    , Cari temen mabar
                  </Text>
                </HelpItem>
                <HelpItem>
                  <Box flexShrink={0}>
                    <Image src='/img/ic-book.svg' />
                  </Box>
                  <Text fontSize={['md']} fontWeight='light'>
                    <strong>
                      Lihat Server{' '}
                      <Link href='/wiki'>
                        <Text as='u'>Wiki</Text>
                      </Link>
                    </strong>
                    , Lebih detail & mandiri
                  </Text>
                </HelpItem>
                <HelpItem>
                  <Box flexShrink={0}>
                    <Image src='/img/ic-file.svg' />
                  </Box>
                  <Text fontSize={['md']} fontWeight='light'>
                    <strong>
                      Punya{' '}
                      <Link href='#'>
                        <Text as='u'>Saran</Text>
                      </Link>
                    </strong>
                    ? Drop dulu, hasut kemudian
                  </Text>
                </HelpItem>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Flex>
  );
};

export default HelpSection;
