import { produce } from 'immer';
import { Actions, ActionTypes } from './actions';
import { OrderInfo } from '../../pages/Cart';

export interface CartItemType {
  id: number;
  quantity: number;
}

export interface Order extends OrderInfo {
  id: number;
  items: CartItemType[];
}

export interface CartsState {
  cart: CartItemType[];
  orders: Order[];
}

export const cartsInitialState: CartsState = {
  cart: [],
  orders: [],
};

export function cartsReducer(state: CartsState, { type, payload }: Actions) {
  switch (type) {
    case ActionTypes.AddItem:
      // return {
      //   ...state,
      //   cart: [...state.cart, payload],
      // };
      return produce(state, (draft) => {
        if (!payload) {
          return state;
        }
        draft.cart.push(payload);
      });
    case ActionTypes.RemoveItem: {
      // return {
      //   ...state,
      //   cart: state.cart.filter((item) => item.id !== payload.id),
      // };
      return produce(state, (draft) => {
        const itemToRemove = draft.cart.findIndex(
          (item) => item.id === payload
        );
        draft.cart.splice(itemToRemove, 1);
      });
    }
    case ActionTypes.IncrementQuantity:
      return produce(state, (draft) => {
        const itemToUpdate = draft.cart.find((item) => item.id === payload);

        if (itemToUpdate?.id) {
          itemToUpdate.quantity += 1;
        }
      });
    case ActionTypes.DecrementQuantity:
      return produce(state, (draft) => {
        const itemToUpdate = draft.cart.find((item) => item.id === payload);

        if (itemToUpdate?.id && itemToUpdate.quantity > 1) {
          itemToUpdate.quantity -= 1;
        }
      });
    case ActionTypes.CreateNewOrder:
      return produce(state, (draft) => {
        draft.orders.push(payload);
        draft.cart = [];
      });
    default:
      return state;
  }
}
