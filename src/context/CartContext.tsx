import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {Book} from '../types/Book';
import {CartItem} from '../types/CartItem';

type CONTEXT_PROPS = {
  count: number;
  items: CartItem[];
  total: number;
  add: (book: Book) => void;
  remove: (id: number) => void;
};

const init: CONTEXT_PROPS = {
  count: 0,
  items: [],
  total: 0,
  add: () => {},
  remove: (_id: number) => {},
};

const CartContext = createContext(init);

const CartProvider: React.FC = ({children}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    sync();
  }, [items, rerender]);

  async function add(book: Book) {
    const item = items.find(i => i.id === book.id);

    if (item) {
      item.count ? item.count++ : (item.count = 1);
    } else {
      book.count = 1; // FIXME fix type
      items.push(book);
    }

    setRerender(!rerender);
  }

  async function remove(id: number) {
    const item = items.find(i => i.id === id);

    if (!item) {
      return;
    }

    item.count--;

    if (item.count) {
      setItems(items);
      setRerender(!rerender);
    } else {
      const _items = items.filter(({id: item_id}) => item_id !== id);
      console.log({after: _items});

      setItems(_items);
    }
  }

  async function sync() {
    await AsyncStorage.setItem('@cart', JSON.stringify(items));

    let sum = 0;

    items.forEach(i => (sum += i.price * i.count));

    setTotal(sum);
    setCount(items.length);
  }

  async function load() {
    const cart = JSON.parse((await AsyncStorage.getItem('@cart')) || '[]');

    setItems(cart);
  }

  return (
    <CartContext.Provider value={{items, count, total, add, remove}}>
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  return useContext(CartContext);
}

export {useCart, CartContext, CartProvider};
