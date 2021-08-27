import React from 'react';
import {FlatList, SafeAreaView, ScrollView} from 'react-native';
import {Button, Div, Header, Host, Image} from 'react-native-magnus';
import images from './assets/images';
import {CategoryCard, Hr, Icon} from './components';
import mock from './service/mock';

const numColumns = Math.ceil(mock.categories.length / 2);

const App: React.FC = () => {
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
              <Icon name={'shopping-cart'} fontSize={'xl'} />
            </Button>
          </Div>
        }
        p={'lg'}>
        Book Store
      </Header>
      <Host>
        <Div m={'lg'}>
          <Image h={100} source={images.books} />
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
          </Div>
        </Div>
      </Host>
    </SafeAreaView>
  );
};

export default App;
