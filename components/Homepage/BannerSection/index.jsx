import { Box, Container, Flex, Text, useToast } from '@chakra-ui/react';
import copy from 'copy-to-clipboard';
import React from 'react';
import { ChromaButton, typesList } from '../../BaseComponents/ChromaButton';
import ChromaToast from '../../BaseComponents/ChromaToast';

const BannerSection = () => {
  const toast = useToast();
  return (
    <>
      <Flex
        color='white'
        bgImage={{
          base: 'url("/img/landing-page-banner-small.png"), linear-gradient(rgba(21,21,31,0.2),rgba(21,21,31,0))',
          md: 'url("/img/landing-page-banner.png"), linear-gradient(rgba(21,21,31,0.2),rgba(21,21,31,0))',
        }}
        bgBlendMode='overlay'
        backgroundSize={{ base: 'cover' }}
        backgroundRepeat='no-repeat'
        backgroundPosition={{ base: 'center', md: 'center' }}
        id='nav-home'
      >
        <Container maxW='container.lg'>
          <Box
            paddingTop={{ base: '100px', md: '160px' }}
            paddingBottom={{ base: '40px', md: '80px' }}
            width={{ base: '100%', md: '55%' }}
          >
            <Text
              fontSize={{ base: '44px', md: '6xl' }}
              fontWeight='light'
              lineHeight={{ base: '56px', sm: '64px' }}
            >
              mau mulai petualangan?
              <br />
              <strong>lebih seru di chroma mc</strong>
            </Text>
            <Box
              fontSize='lg'
              fontWeight='light'
              marginBottom='12'
              marginTop='6'
            >
              Nggak penting gimana caramu dan apa tujuanmu main.{' '}
              <Text display={{ base: 'inline', lg: 'inline-block' }}>
                Chroma mc selalu bisa kasih kamu cerita yang berbeda
              </Text>
            </Box>
            <ChromaButton
              types={typesList.primary}
              width={{ base: '100%', md: 'fit-content' }}
              onClick={() => {
                copy('mc.chroma-gaming.xyz');
                toast({
                  duration: 1500,
                  position: 'top-right',
                  render: () => {
                    return (
                      <ChromaToast
                        title='Link berhasil dicopy'
                        subtitle='mc.chroma-gaming.xyz'
                      />
                    );
                  },
                });
              }}
            >
              Mainkan Sekarang
            </ChromaButton>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default BannerSection;
