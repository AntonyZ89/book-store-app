import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Div, Image, Text} from 'react-native-magnus';
import {Icon, NumberFormat} from '.';
import {useCart} from '../context/CartContext';
import {CartItem} from '../types/CartItem';

type PROPS = {
  item: CartItem;
};

const CartItemCard = ({item}: PROPS) => {
  const {id, image, name, price, count} = item;

  const {add, remove} = useCart();

  return (
    <Div bg={'gray400'} my={'md'} p={'md'} rounded={'md'} flexDir={'row'}>
      <Image source={image} w={100} h={100} rounded={'md'} mr={'md'} />
      <Div justifyContent={'center'} flex={1}>
        <Text>{name}</Text>
        <NumberFormat value={price} />
      </Div>
      <Div
        flex={0.2}
        bg={'gray300'}
        rounded={'md'}
        alignItems={'center'}
        justifyContent={'space-around'}>
        <TouchableOpacity onPress={() => add(item)}>
          <Icon name={'plus'} color={'gray700'} p={'xs'} />
        </TouchableOpacity>
        <Text color={'gray700'} fontWeight={'bold'}>
          {count}
        </Text>
        <TouchableOpacity onPress={() => remove(id)}>
          {count > 1 ? (
            <Icon name={'minus'} color={'gray700'} p={'xs'} />
          ) : (
            <Icon name={'trash'} color={'red700'} p={'xs'} rounded={'circle'} />
          )}
        </TouchableOpacity>
      </Div>
    </Div>
  );
};

export default CartItemCard;
