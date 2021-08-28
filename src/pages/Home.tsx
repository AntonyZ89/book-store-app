import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {Button, Div, Header, Host, Image, Text} from 'react-native-magnus';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../assets/images';
import {BookCard, CategoryCard, Hr, Icon} from '../components';
import {useCart} from '../context/CartContext';
import mock from '../service/mock';

const numColumns = Math.ceil(mock.categories.length / 2);

const Home = () => {
  const {count} = useCart();

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
            <Button bg={'transparent'}>
              <Text>{count}</Text>
              <Icon name={'shopping-cart'} fontSize={'xl'} />
            </Button>
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

            <ScrollView
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingVertical: 20}}>
              <FlatList
                scrollEnabled={false}
                contentContainerStyle={{
                  alignSelf: 'flex-start',
                }}
                numColumns={numColumns}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={mock.categories}
                renderItem={({item}) => <CategoryCard item={item} />}
              />
            </ScrollView>
            <Div bg={'gray300'} rounded={'md'}>
              <Header
                bg={'transparent'}
                shadow={'none'}
                suffix={
                  <Button fontWeight={'bold'} fontSize={'sm'}>
                    Ver todos
                  </Button>
                }>
                Outros items
              </Header>
              <FlatList
                horizontal
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
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
