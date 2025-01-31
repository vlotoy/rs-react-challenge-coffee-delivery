import { produce } from 'immer';
import { Actions } from './actions';

export interface CartItem {
  id: number;
  quantity: number;
}

interface Order {
  id: number;
  items: CartItem[];
}

export interface CartsState {
  cart: CartItem[];
  orders: Order[];
}

export const cartsInitialState: CartsState = {
  cart: [],
  orders: [],
};

export function cartsReducer(state: CartsState, { type, payload }: Actions) {
  switch (type) {
    case 'ADD_ITEM':
      // return {
      //   ...state,
      //   cart: [...state.cart, payload],
      // };
      return produce(state, (draft) => {
        draft.cart.push(payload);
      });
    case 'REMOVE_ITEM': {
      // return {
      //   ...state,
      //   cart: state.cart.filter((item) => item.id !== payload.id),
      // };
      return produce(state, (draft) => {
        const itemToRemove = draft.cart.findIndex(
          (item) => item.id === payload.id
        );
        draft.cart.splice(itemToRemove, 1);
      });
    }
    default:
      return state;
  }
}
