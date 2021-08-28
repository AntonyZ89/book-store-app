import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {Book} from '../types/Book';

type CONTEXT_PROPS = {
  count: number;
  items: Book[];
  add: (book: Book) => void;
  remove: (id: number) => void;
};

const init: CONTEXT_PROPS = {
  count: 0,
  items: [],
  add: () => {},
  remove: (_id: number) => {},
};

const CartContext = createContext(init);

const CartProvider: React.FC = ({children}) => {
  const [items, setItems] = useState<Book[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    load();
  }, []);

  async function add(book: Book) {
    items.push(book);
    setItems(items);

    await sync();
  }

  async function sync() {
    await AsyncStorage.setItem('@cart', JSON.stringify(items));
  }

  async function remove(id: number) {
    const _items = items.filter(({id: item_id}) => item_id !== id);

    setItems(_items);

    await sync();
  }

  async function load() {
    const cart = JSON.parse((await AsyncStorage.getItem('@cart')) || '[]');
    setItems(cart);
    setCount(cart.length);
  }

  return (
    <CartContext.Provider value={{items, count, add, remove}}>
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  return useContext(CartContext);
}

export {useCart, CartContext, CartProvider};
