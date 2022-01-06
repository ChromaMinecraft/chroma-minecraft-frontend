import { Box, Container, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { ChromaButton, typesList } from '../../BaseComponents/ChromaButton';

const DonateSection = () => {
  return (
    <Flex
      color='white'
      bgImage={{
        base: 'url("/img/landing-page-donasi-small-darken.png")',
        md: 'url("/img/landing-page-donasi.png")',
      }}
      bgBlendMode='overlay'
      backgroundSize={{ base: 'cover' }}
      backgroundRepeat='no-repeat'
      backgroundPosition={{ base: 'bottom', md: 'bottom' }}
      id='nav-donate'
    >
      <Container maxW='container.lg'>
        <Box
          marginX='auto'
          paddingTop={{ base: '100px', md: '80px' }}
          paddingBottom={{ base: '40px', md: '80px' }}
        >
          {/* TODO: Add background image */}
          <Flex justifyContent='space-between' flex={1}>
            <Box w={{ base: '0%', md: '40%', lg: '45%' }} marginX='auto' />
            <Box w={{ base: '100%', md: '60%', lg: '55%' }} marginX='auto'>
              <Text
                fontSize={['sm', 'md', 'md', 'lg']}
                fontWeight='light'
                textTransform='uppercase'
                letterSpacing='4.5px'
              >
                Donasi
              </Text>
              <Text
                fontSize={['2xl', '2xl', '3xl', '4xl']}
                fontWeight='light'
                lineHeight={{ base: '24px', sm: '32px', md: '48px' }}
                marginTop='4'
                marginBottom='8'
              >
                Kami bisa sejauh ini juga
                <br />
                <strong>karena dukunganmu!</strong>
              </Text>
              <Text
                fontSize={['lg']}
                fontWeight='light'
                noOfLines={{ base: '5', sm: '3' }}
                marginBottom='14'
              >
                Donasi mulai dari 10.000 untuk nikmati fitur-fitur eksklusif
                dari kami. Atau beri vote dan dapatkan random drop setiap hari.
              </Text>
              <Flex
                alignItems={{ base: 'left', md: 'center', lg: 'center' }}
                flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
                gridGap={{ base: '4' }}
              >
                <ChromaButton types={typesList.primary} as='a' href='/donate'>
                  Mulai Berdonasi
                </ChromaButton>
                <ChromaButton
                  as='a'
                  href='https://minecraft-mp.com/server/268676/vote/'
                  target='_blank'
                  types={typesList.secondary}
                >
                  Vote Sekarang
                </ChromaButton>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Flex>
  );
};

export default DonateSection;
