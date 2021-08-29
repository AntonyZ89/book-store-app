import React from 'react';
import {FlatList} from 'react-native';
import {Button, Div, Host, Text} from 'react-native-magnus';
import {CartItemCard, Hr, NumberFormat} from '../../components';
import {CartItem} from '../../types/CartItem';

type PROPS = {
  items: CartItem[];
  total: number;
};

const Cart = ({items, total}: PROPS) => {
  return (
    <>
      <Host>
        <Div p={'md'}>
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={items}
            renderItem={({item}) => <CartItemCard item={item} />}
          />

          <Hr />

          <Div flexDir={'row'} justifyContent={'space-between'}>
            <Text fontSize={'lg'} fontWeight={'bold'}>
              Total
            </Text>
            <NumberFormat value={total} fontSize={'lg'} fontWeight={'bold'} />
          </Div>
        </Div>
      </Host>
      <Button block m={'md'} bg={'indigo400'}>
        Finalizar compra
      </Button>
    </>
  );
};

export default Cart;
