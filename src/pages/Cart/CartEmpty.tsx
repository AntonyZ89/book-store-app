import React from 'react';
import {Div, Text} from 'react-native-magnus';
import {Icon} from '../../components';

const CartEmpty = () => {
  return (
    <Div flex={1} justifyContent={'center'} alignItems={'center'}>
      <Icon fontSize={64} name={'book-open'} />
      <Text fontSize={'md'} fontWeight={'bold'}>
        Carrinho vazio
      </Text>
    </Div>
  );
};

export default CartEmpty;
