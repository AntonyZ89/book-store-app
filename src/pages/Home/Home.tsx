import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {Button, Div, DrawerRef, Header, Image, Text} from 'react-native-magnus';
import {RootStackParamList} from '../../../App';
import images from '../../assets/images';
import {BookCard, CartIcon, CategoryCard, Hr, Icon} from '../../components';
import Container from '../../components/Container';
import mock from '../../service/mock';
import Drawer from './components/Drawer';

const numColumns = Math.ceil(mock.categories.length / 2);

type ListBookScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ListBooks'
>;

const Home = () => {
  const navigation = useNavigation<ListBookScreenNavigationProp>();

  const drawerRef = React.createRef<DrawerRef>();

  function openDrawer() {
    drawerRef.current?.open();
  }

  return (
    <Container>
      <Drawer ref={drawerRef} />
      <Header
        alignment={'left'}
        prefix={
          <Button ml={'md'} bg={'transparent'} onPress={openDrawer}>
            <Icon name={'bars'} fontSize={'xl'} />
          </Button>
        }
        suffix={<CartIcon />}
        p={'none'}>
        Book Store
      </Header>
      <ScrollView>
        <Div m={'lg'}>
          <Div>
            <Image h={100} source={images.banner} />
            <Div
              position={'absolute'}
              w={'100%'}
              h={'100%'}
              justifyContent={'center'}
              alignItems={'center'}>
              <Text
                fontSize={'6xl'}
                color={'white'}
                fontWeight={'bold'}
                textShadowColor={'black'}
                textShadowRadius={10}>
                Book Store
              </Text>
            </Div>
          </Div>
          <Hr />

          <Text fontSize={'lg'} fontWeight={'bold'} m={'md'}>
            CATEGORIAS
          </Text>

          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <FlatList
              key={numColumns}
              scrollEnabled={false}
              contentContainerStyle={{alignSelf: 'flex-start'}}
              numColumns={numColumns}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={mock.categories}
              renderItem={({item}) => <CategoryCard item={item} />}
            />
          </ScrollView>
          <Div bg={'indigo200'} rounded={'md'} p={'xs'} my={'md'}>
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
    </Container>
  );
};

export default Home;
