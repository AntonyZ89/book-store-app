import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {Button, Div, Header, Host, Image, Text} from 'react-native-magnus';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../App';
import images from '../assets/images';
import {BookCard, CartIcon, CategoryCard, Hr, Icon} from '../components';
import mock from '../service/mock';

const numColumns = Math.ceil(mock.categories.length / 2);

type ListBookScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ListBooks'
>;

const Home = () => {
  const navigation = useNavigation<ListBookScreenNavigationProp>();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        alignment={'left'}
        prefix={
          <Button bg={'transparent'}>
            <Icon name={'bars'} fontSize={'xl'} />
          </Button>
        }
        suffix={
          <Div flexDir={'row'}>
            <Button bg={'transparent'}>
              <Icon name={'user'} fontSize={'xl'} />
            </Button>

            <CartIcon />
          </Div>
        }
        p={'lg'}>
        Book Store
      </Header>
      <Host>
        <ScrollView>
          <Div m={'lg'}>
            <Image h={100} source={images.banner} />
            <Hr />

            <Text fontSize={'lg'} fontWeight={'bold'} m={'md'}>
              CATEGORIAS
            </Text>

            <ScrollView
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <FlatList
                scrollEnabled={false}
                horizontal
                contentContainerStyle={{
                  alignSelf: 'flex-start',
                }}
                // numColumns={numColumns}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={mock.categories}
                renderItem={({item}) => <CategoryCard item={item} />}
              />
            </ScrollView>
            <Div bg={'gray300'} rounded={'md'} my={'md'}>
              <Header
                bg={'transparent'}
                shadow={'none'}
                suffix={
                  <Button
                    fontWeight={'bold'}
                    fontSize={'sm'}
                    onPress={() => navigation.navigate('ListBooks')}>
                    Ver todos
                  </Button>
                }>
                Outros items
              </Header>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={true}
                data={mock.books}
                renderItem={({item}) => <BookCard item={item} />}
              />
            </Div>
          </Div>
        </ScrollView>
      </Host>
    </SafeAreaView>
  );
};

export default Home;
