import React from 'react';
import {StyleSheet} from 'react-native';
import {defaultTheme, Host} from 'react-native-magnus';
import {SafeAreaView} from 'react-native-safe-area-context';

const Container: React.FC = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Host>{children}</Host>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTheme.colors?.indigo100,
  },
});

export default Container;
