import { Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';

export default function DonateAlert({ status, children, ...props }) {
  return (
    <Alert
      {...props}
      status={status}
      variant='solid'
      fontSize={{ base: 'xs', md: 'sm' }}
      fontWeight='light'
      bg='#2D2D36'
      color='white'
    >
      <AlertIcon />
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
