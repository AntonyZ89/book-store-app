import React from 'react';
import {Div} from 'react-native-magnus';

const Hr: React.FC = () => {
  return (
    <Div my={'md'} alignItems={'center'}>
      <Div bg={'gray'} w={'25%'} h={4} rounded={'circle'} />
    </Div>
  );
};

export default Hr;
