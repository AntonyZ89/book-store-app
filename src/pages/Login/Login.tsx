import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {defaultTheme, Div, Text} from 'react-native-magnus';
import {Icon} from '../../components';
import Container from '../../components/Container';
import Form from './Form';

const Login = () => {
  return (
    <Container>
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
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    margin: defaultTheme.spacing?.xl,
    flex: 1,
    justifyContent: 'center',
  },
});

export default Login;
