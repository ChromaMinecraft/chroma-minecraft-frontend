import { Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';

export default function DonateAlert({ status, children, ...props }) {
  return (
    <Alert
      {...props}
      status={status}
      variant='solid'
      fontSize={{ base: 'xs', md: 'sm' }}
      fontWeight='light'
      bg='#15151F'
    >
      <AlertIcon />
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
