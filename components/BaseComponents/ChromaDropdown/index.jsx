import { Select } from '@chakra-ui/react';
import React from 'react';

const ChromaDropdown = ({ options, ...props }) => {
  return (
    <>
      <Select
        {...props}
        backgroundColor='#24242980'
        _focus={{ outline: 'none' }}
      >
        {options.map(({ value, label }) => (
          <option value={value} style={{ backgroundColor: '#24242980' }}>
            {label}
          </option>
        ))}
      </Select>
    </>
  );
};

export default ChromaDropdown;
