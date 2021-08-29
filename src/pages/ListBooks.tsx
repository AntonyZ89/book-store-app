import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {FlatList} from 'react-native';
import {Div, Host} from 'react-native-magnus';
import {RootStackParamList} from '../../App';
import {BookCard} from '../components';
import mock from '../service/mock';

type ListBookScreenRouteProp = RouteProp<RootStackParamList, 'ListBooks'>;

const ListBooks = () => {
  const {category} = useRoute<ListBookScreenRouteProp>().params || {};

  const books = category
    ? mock.books.filter(book => book.category_id === category.id)
    : mock.books;

  return (
    <Host>
      <Div>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={books}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          renderItem={({item}) => <BookCard item={item} />}
        />
      </Div>
    </Host>
  );
};

export default ListBooks;
