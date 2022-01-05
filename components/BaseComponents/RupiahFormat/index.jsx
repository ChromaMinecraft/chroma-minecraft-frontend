import { Text } from '@chakra-ui/react';
import NumberFormat from 'react-number-format';

export default function RupiahFormat({ value, fontWeight, ...rest }) {
  return (
    <NumberFormat
      {...rest}
      value={value}
      displayType={'text'}
      thousandSeparator={'.'}
      prefix={'Rp '}
      decimalSeparator={','}
      decimalScale={0}
      fixedDecimalScale={true}
      renderText={(value) => (
        <Text fontWeight={fontWeight} fontSize={['sm', 'md']} color='white'>
          {value}
        </Text>
      )}
    />
  );
}
