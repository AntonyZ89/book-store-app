import React from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {Div, Image, Text} from 'react-native-magnus';
import {NumberFormat} from '.';
import {useCart} from '../context/CartContext';
import {Book} from '../types/Book';

type PROPS = {
  item: Book;
};

const BookCard = ({item}: PROPS) => {
  const {name, image, price} = item;

  const {add} = useCart();

  async function addToCart() {
    add(item);

    Alert.alert('Carrinho', `${name} adicionado ao carrinho.`);
  }

  return (
    <Div m={'xs'} w={160} flex={0.5}>
      <TouchableOpacity onPress={addToCart}>
        <Image height={150} source={image} roundedTop={'md'} />
        <Text
          w={'100%'}
          py={'xs'}
          fontWeight={'bold'}
          fontSize={'md'}
          bg={'blue600'}
          color={'white'}
          textAlign={'center'}>
          {name}
        </Text>
        <NumberFormat
          value={price}
          bg={'blue500'}
          color={'white'}
          fontWeight={'bold'}
          textAlign={'center'}
          py={'xs'}
          roundedTop={0}
          roundedBottom={'md'}
        />
      </TouchableOpacity>
    </Div>
  );
};

export default BookCard;
