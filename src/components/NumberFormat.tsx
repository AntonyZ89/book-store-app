import React from 'react';
import {Text, TextProps} from 'react-native-magnus';
import NumberFormatBase from 'react-number-format';

type PROPS = {
  value: number;
} & TextProps;

const NumberFormat = ({value, ...props}: PROPS) => {
  return (
    <NumberFormatBase
      value={value}
      thousandSeparator={true}
      displayType={'text'}
      prefix={'R$ '}
      renderText={result => <Text {...props}>{result}</Text>}
    />
  );
};

export default NumberFormat;
