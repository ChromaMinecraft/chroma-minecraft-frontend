import { useState } from 'react';
import { Container, Flex, Box, Text } from '@chakra-ui/react';
import NavigationSection from '../components/BaseComponents/NavigationSection';
import DonateTab from '../components/DonatePage/DonateTab';
import Footer from '../components/BaseComponents/Footer';
import FloatingActionButton from '../components/BaseComponents/FloatingActionButton';
import DonateModalUsername from '../components/DonatePage/DonateModalUsername';
import { DonateProvider } from '../context/donate';
import DonateDescription from '../components/DonatePage/DonateDescription';

const Donate = () => {
  return (
    <>
      <DonateProvider>
        <DonateModalUsername />
        <FloatingActionButton>
          <NavigationSection />
          <Flex color='white' bg='#15151F'>
            <Container maxW='container.lg'>
              <Flex
                marginX='auto'
                paddingTop={{ base: '100px', md: '160px' }}
                paddingBottom={{ base: '40px', md: '80px' }}
                flexDirection={{ base: 'column', md: 'row' }}
                justifyContent='space-between'
              >
                <Box width={{ base: '100%', md: '40%' }}>
                  <DonateDescription />
                </Box>
                <Box width={{ base: '100%', md: '50%' }}>
                  <DonateTab />
                </Box>
              </Flex>
            </Container>
          </Flex>
          <Footer />
        </FloatingActionButton>
      </DonateProvider>
    </>
  );
};

export default Donate;
