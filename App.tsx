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

import {StatusBar, ThemeProvider} from 'react-native-magnus';
import App from './src/App';
import {CartProvider} from './src/context/CartContext';
import {ListBooks} from './src/pages';

export type RootStackParamList = {
  App: undefined;
  ListBooks: {
    category: string;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const Main: React.FC = () => {
  return (
    <ThemeProvider>
      <StatusBar barStyle={'dark-content'} />
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={'App'}
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="App" component={App} />
            <Stack.Screen name="ListBooks" component={ListBooks} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </ThemeProvider>
  );
};

export default Main;
