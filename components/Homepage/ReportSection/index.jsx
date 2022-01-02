import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import ChromaDropdown from '../../BaseComponents/ChromaDropdown';

const ServerOptions = [
  {
    value: 'Vanilla',
    label: 'Vanilla',
  },
  {
    value: 'SkyBlock',
    label: 'SkyBlock',
  },
];

const ReportTypeOptions = [
  {
    value: 'Cheat',
    label: 'Cheat',
  },
  {
    value: 'Grief',
    label: 'Grief',
  },
  {
    value: 'Bug',
    label: 'Bug',
  },
  {
    value: 'Other',
    label: 'Lainnya',
  },
];

const ReportSection = () => {
  return (
    <Flex
      color='white'
      bgImage={{
        base: 'url("/img/landing-page-laporan-small.png")',
        md: 'url("/img/landing-page-laporan.png")',
      }}
      backgroundSize={{ base: 'cover' }}
      backgroundRepeat='no-repeat'
      backgroundPosition={{ base: 'bottom', md: 'center' }}
      id='nav-report'
    >
      <Container maxW='container.lg'>
        <Box
          width={{ base: '100%', md: '50%' }}
          paddingY={{ base: '40px', md: '80px' }}
        >
          <Text
            fontSize={['sm', 'md', 'md', 'lg']}
            fontWeight='light'
            textTransform='uppercase'
            letterSpacing='4.5px'
          >
            LAPORAN
          </Text>
          <Text
            fontSize={['2xl', '2xl', '3xl', '4xl']}
            marginTop='4'
            marginBottom='8'
            lineHeight={{ base: '24px', sm: '32px', md: '48px' }}
          >
            Cheating, griefing, bullying, aneh, dan mengganggu.{' '}
            <strong>Laporkan!</strong>
          </Text>
          <FormControl>
            <FormLabel color='#ADADAD' fontWeight='light'>
              Jenis Temuan
            </FormLabel>
            <ChromaDropdown id='report-type' options={ReportTypeOptions} />
          </FormControl>
          <FormControl marginTop='4'>
            <FormLabel color='#ADADAD' fontWeight='light'>
              Ketemu di server mana?
            </FormLabel>
            <ChromaDropdown id='report-server' options={ServerOptions} />
          </FormControl>
          <FormControl marginTop='4'>
            <FormLabel color='#ADADAD' fontWeight='light'>
              Username Minecraftmu
            </FormLabel>
            <Input
              required
              id='report-username'
              placeholder='Pakai yang terdaftar di Chroma Minecraft'
              backgroundColor='#24242980'
              _focus={{ outline: 'none' }}
            ></Input>
          </FormControl>
          <FormControl marginTop='4'>
            <FormLabel color='#ADADAD' fontWeight='light'>
              Ceritakan apa yang terjadi
            </FormLabel>
            <Textarea
              id='report-description'
              rows='5'
              placeholder='Jangan panjang-panjang, biar gampang'
              backgroundColor='#24242980'
              resize='none'
              _focus={{ outline: 'none' }}
            />
          </FormControl>
          <Box
            marginTop='4'
            padding='12px'
            borderRadius='8px'
            backgroundColor='rgba(36, 36, 41, 0.5)'
            width={{ base: '100%', md: 'fit-content' }}
          >
            <Button
              color='white'
              width={{ base: '100%', md: 'inherit' }}
              size={['lg']}
              backgroundColor='#F0375B'
              _hover={{ bg: 'none' }}
              _focus={{ outline: 'none' }}
              disabled
              _disabled={{
                backgroundColor: '#242429',
                color: '#606060',
              }}
            >
              Laporkan
            </Button>
          </Box>
        </Box>
      </Container>
    </Flex>
  );
};

export default ReportSection;
