import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Button, Div, Image} from 'react-native-magnus';
import {RootStackParamList} from '../../App';
import {Category} from '../types/Category';

type PROPS = {
  item: Category;
};

type ListBookScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ListBooks'
>;

const CategoryCard = ({item: {name, image}}: PROPS) => {
  const navigation = useNavigation<ListBookScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ListBooks', {category: name})}>
      <Div w={130} m={'xs'}>
        <Image h={100} source={image} roundedTop={'md'} />
        <Button
          w={'100%'}
          py={'xs'}
          roundedTop={0}
          roundedBottom={'md'}
          fontWeight={'bold'}
          fontSize={'md'}>
          {name}
        </Button>
      </Div>
    </TouchableOpacity>
  );
};

export default CategoryCard;
