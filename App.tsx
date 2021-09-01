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

import {ThemeProvider} from 'react-native-magnus';
import App from './src/App';
import {CartProvider} from './src/context/CartContext';
import {ListBooks, Login} from './src/pages';
import {CartIcon} from './src/components';
import Cart from './src/pages/Cart';
import {Category} from './src/types';
import {AuthProvider} from './src/context/AuthContext';
import {ModalProvider} from './src/context/ModalContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';

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
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <ModalProvider>
            <CartProvider>
              <AuthProvider>
                <Stack.Navigator
                  initialRouteName={'Login'}
                  screenOptions={{
                    headerRight: () => <CartIcon />,
                    headerBackTitle: 'Voltar',
                  }}>
                  <Stack.Screen
                    options={{headerShown: false}}
                    name="Login"
                    component={Login}
                  />

                  <Stack.Screen
                    options={{
                      headerShown: false,
                      gestureEnabled: false,
                    }}
                    name="App"
                    component={App}
                  />

                  <Stack.Screen name={'ListBooks'} component={ListBooks} />

                  <Stack.Screen
                    options={{
                      title: 'Carrinho',
                      headerRight: undefined,
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
    </SafeAreaProvider>
  );
};

export default Main;
