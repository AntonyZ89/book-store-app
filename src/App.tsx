import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Home} from './pages';

export type HomeBottomParamList = {
  Home: undefined;
};

const Tab = createBottomTabNavigator<HomeBottomParamList>();

const App: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName={'Home'}>
      <Tab.Screen
        name={'Home'}
        options={{headerShown: false}}
        component={Home}
      />
    </Tab.Navigator>
  );
};

export default App;
