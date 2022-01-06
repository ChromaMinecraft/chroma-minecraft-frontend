import { Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { DonateContext } from '../../../context/donate';

const DonateDescription = ({ ...props }) => {
  const { username, modalUsernameShown } = useContext(DonateContext);

  return (
    <>
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
        fontWeight='bold'
        marginTop='4'
        marginBottom='8'
        lineHeight={{ base: '24px', sm: '32px', md: '48px' }}
      >
        Hello, {!modalUsernameShown && username}
      </Text>
      <Text fontSize={['md']} fontWeight='light'>
        Makasih banyak nih udah mau donasi, dengan bantuanmu kita bisa sampai
        sejauh ini. Kalau sendirian server kita ini nggak akan sampai sebagus
        ini. Dukung kami terus ya, masih banyak hal yang pingin kita tunjukkin
        ke kamu kok 😁
      </Text>
    </>
  );
};

export default DonateDescription;
