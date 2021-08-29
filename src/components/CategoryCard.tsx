import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Div, Image, Text} from 'react-native-magnus';
import {RootStackParamList} from '../../App';
import {Category} from '../types/Category';

type PROPS = {
  item: Category;
};

type ListBookScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ListBooks'
>;

const CategoryCard = ({item}: PROPS) => {
  const navigation = useNavigation<ListBookScreenNavigationProp>();

  const {name, image} = item;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ListBooks', {category: item})}>
      <Div w={130} m={'xs'}>
        <Image h={100} source={image} roundedTop={'md'} />
        <Text
          h={45}
          py={'xs'}
          roundedTop={0}
          roundedBottom={'md'}
          fontWeight={'bold'}
          fontSize={'sm'}
          bg={'blue600'}
          color={'white'}
          p={'md'}
          textAlign={'center'}
          numberOfLines={2}>
          {name}
        </Text>
      </Div>
    </TouchableOpacity>
  );
};

export default CategoryCard;
