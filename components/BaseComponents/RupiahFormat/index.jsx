import { Text } from '@chakra-ui/react';
import NumberFormat from 'react-number-format';

export default function RupiahFormat({ value, fontWeight, fontSize, ...rest }) {
  const fSize = !fontSize ? ['sm', 'md'] : fontSize;

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
        <Text fontWeight={fontWeight} fontSize={fSize} color='white'>
          {value}
        </Text>
      )}
    />
  );
}
