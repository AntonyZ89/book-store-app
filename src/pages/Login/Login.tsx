import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {defaultTheme, Div, Host, Text} from 'react-native-magnus';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from '../../components';
import Form from './Form';

const Login = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Host>
        <ScrollView contentContainerStyle={styles.scrollview}>
          <Div flex={1} justifyContent={'center'}>
            <Div mb={'xl'}>
              <Text
                textAlign={'center'}
                fontSize={'6xl'}
                mb={'xl'}
                fontWeight={'bold'}>
                BOOK STORE
              </Text>
              <Icon name={'book-open'} fontSize={128} />
            </Div>
            <Form />
          </Div>
        </ScrollView>
      </Host>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    margin: defaultTheme.spacing.xl,
    flex: 1,
    justifyContent: 'center',
  },
});

export default Login;
