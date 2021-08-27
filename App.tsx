/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {StatusBar, ThemeProvider} from 'react-native-magnus';
import App from './src/App';

const Main: React.FC = () => {
  return (
    <ThemeProvider>
      <StatusBar barStyle={'dark-content'} />
      <App />
    </ThemeProvider>
  );
};

export default Main;
