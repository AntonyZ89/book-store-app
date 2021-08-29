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
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {Button, Header, StatusBar, ThemeProvider} from 'react-native-magnus';
import App from './src/App';
import {CartProvider} from './src/context/CartContext';
import {ListBooks} from './src/pages';
import {CartIcon, Icon} from './src/components';
import Cart from './src/pages/Cart';
import {Category} from './src/types';
import Login from './src/pages/Login';
import {AuthProvider} from './src/context/AuthContext';
import {ModalProvider} from './src/context/ModalContext';

export type RootStackParamList = {
  Login: undefined;
  App: undefined;
  ListBooks?: {
    category: Category;
  };
  Cart: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Main = () => {
  return (
    <ThemeProvider>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
        <ModalProvider>
          <CartProvider>
            <AuthProvider>
              <Stack.Navigator
                initialRouteName={'Login'}
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
                        }>
                        {route.name}
                      </Header>
                    );
                  },
                }}>
                <Stack.Screen
                  options={{headerShown: false}}
                  name="Login"
                  component={Login}
                />

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
                        }
                        suffix={<CartIcon />}>
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
            </AuthProvider>
          </CartProvider>
        </ModalProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Main;
