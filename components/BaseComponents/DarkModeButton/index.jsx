import { Box, useColorMode } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';
export default function DarkModeButton(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      zIndex='2000'
      position='absolute'
      top='4'
      right='4'
      borderRadius='full'
      px='2'
      py='2'
      backgroundColor={colorMode === 'dark' ? 'gray.700' : 'gray.50'}
      fontSize='2xl'
      _hover={{
        cursor: 'pointer',
      }}
      onClick={toggleColorMode}
    >
      {colorMode === 'dark' ? <FiSun /> : <FiMoon />}
    </Box>
  );
}
