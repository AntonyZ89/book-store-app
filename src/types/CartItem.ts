import {Book} from './Book';

export type CartItem = {
  count: number;
} & Book;
