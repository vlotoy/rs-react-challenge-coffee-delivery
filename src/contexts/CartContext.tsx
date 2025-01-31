import { ReactNode, useReducer } from 'react';
import { CartContext } from '.';
import {
  CartItem,
  cartsInitialState,
  cartsReducer,
} from '../reducers/cart/reducer';
import { addItemAction, removeItemAction } from '../reducers/cart/actions';

interface CartContextProviderProps {
  children: ReactNode;
}

export interface CartContextType {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartsState, dispatch] = useReducer(
    cartsReducer,
    cartsInitialState
    // (cartState) => {
    //   const storedStateAsJSON = localStorage.getItem(
    //     '@coffee-delivery:cart-state-1.0.0'
    //   );

    //   if (storedStateAsJSON) {
    //     return JSON.parse(storedStateAsJSON);
    //   }

    //   return cartState;
    // }
  );
  const { cart } = cartsState;
  console.log(cart);

  function addItem(item: CartItem) {
    dispatch(addItemAction(item));
  }

  function removeItem(item: CartItem) {
    dispatch(removeItemAction(item));
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
