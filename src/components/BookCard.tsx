import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Div, Image, Text} from 'react-native-magnus';
import {NumberFormat} from '.';
import {Book} from '../types/Book';

type PROPS = {
  item: Book;
};

const BookCard = ({item: {name, image, price}}: PROPS) => {
  return (
    <Div m={'xs'} w={160} flex={0.5}>
      <TouchableOpacity>
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
