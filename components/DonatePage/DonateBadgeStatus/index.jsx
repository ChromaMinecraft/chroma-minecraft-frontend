import { Badge } from '@chakra-ui/react';

const DonateBadgeStatus = ({ status }) => {
  const colorSchemeStatus = {
    PAID: 'green',
    FAILED: 'red',
    UNPAID: 'gray',
    REFUND: 'yellow',
  };

  const color = colorSchemeStatus[status]
    ? colorSchemeStatus[status]
    : 'blackAlpha';

  return (
    <Badge
      colorScheme={color}
      variant='solid'
      width='min-content'
      height='min-content'
    >
      {status}
    </Badge>
  );
};

export default DonateBadgeStatus;
