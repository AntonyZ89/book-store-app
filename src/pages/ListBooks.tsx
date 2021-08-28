import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {FlatList} from 'react-native';
import {Div, Header, Host} from 'react-native-magnus';
import {RootStackParamList} from '../../App';
import {BookCard} from '../components';
import mock from '../service/mock';

type ListBookScreenRouteProp = RouteProp<RootStackParamList, 'ListBooks'>;

const ListBooks = () => {
  const {category} = useRoute<ListBookScreenRouteProp>().params;

  return (
    <Host>
      <Div>
        <Header>{category}</Header>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={mock.books}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          renderItem={({item}) => <BookCard item={item} />}
        />
      </Div>
    </Host>
  );
};

export default ListBooks;
