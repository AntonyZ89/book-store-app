/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackHeaderProps} from '@react-navigation/stack';
import React from 'react';

import {Button, Header, StatusBar, ThemeProvider} from 'react-native-magnus';
import App from './src/App';
import {CartProvider} from './src/context/CartContext';
import {ListBooks} from './src/pages';
import {CartIcon, Icon} from './src/components';
import Cart from './src/pages/Cart';
import {Category} from './src/types/Category';
import {RouteProp} from '@react-navigation/core';

export type RootStackParamList = {
  App: undefined;
  ListBooks?: {
    category: Category;
  };
  Cart: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

type ListBookScreenRouteProp = RouteProp<RootStackParamList, 'ListBooks'>;

const Main: React.FC = () => {
  return (
    <ThemeProvider>
      <StatusBar barStyle={'dark-content'} />
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={'App'}
            screenOptions={{
              header: ({route, navigation}) => {
                return (
                  <Header
                    prefix={
                      <Button
                        bg={'transparent'}
                        onPress={() => navigation.goBack()}>
                        <Icon fontSize={'lg'} name={'arrow-left'} />
                      </Button>
                    }
                    suffix={<CartIcon />}>
                    {route.name}
                  </Header>
                );
              },
            }}>
            <Stack.Screen
              options={{headerShown: false}}
              name="App"
              component={App}
            />

            <Stack.Screen
              name={'ListBooks'}
              component={ListBooks}
              options={{
                header: ({route, navigation}) => (
                  <Header
                    prefix={
                      <Button
                        bg={'transparent'}
                        onPress={() => navigation.goBack()}>
                        <Icon fontSize={'lg'} name={'arrow-left'} />
                      </Button>
                    }>
                    {/** @ts-ignore FIXME */}
                    {route.params?.category?.name || 'Livros'}
                  </Header>
                ),
              }}
            />

            <Stack.Screen
              options={{
                header: ({navigation}) => (
                  <Header
                    prefix={
                      <Button
                        bg={'transparent'}
                        onPress={() => navigation.goBack()}>
                        <Icon fontSize={'lg'} name={'arrow-left'} />
                      </Button>
                    }>
                    Carrinho
                  </Header>
                ),
              }}
              name={'Cart'}
              component={Cart}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </ThemeProvider>
  );
};

export default Main;
