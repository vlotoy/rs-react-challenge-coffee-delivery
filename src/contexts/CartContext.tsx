import { ReactNode, useReducer } from 'react';
import { CartContext } from '.';
import {
  CartItemType,
  cartsInitialState,
  cartsReducer,
  Order,
} from '../reducers/cart/reducer';
import {
  addItemAction,
  createNewOrderAction,
  decrementQuantityAction,
  incrementQuantityAction,
  removeItemAction,
} from '../reducers/cart/actions';

interface CartContextProviderProps {
  children: ReactNode;
}

export interface CartContextType {
  cart: CartItemType[];
  addItem: (item: CartItemType) => void;
  removeItem: (itemId: CartItemType['id']) => void;
  handleIncrementQuantity: (itemId: CartItemType['id']) => void;
  handleDecrementQuantity: (itemId: CartItemType['id']) => void;
  createNewOrder: (data: Order) => void;
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

  function addItem(item: CartItemType) {
    dispatch(addItemAction(item));
  }

  function removeItem(itemId: CartItemType['id']) {
    dispatch(removeItemAction(itemId));
  }

  function handleIncrementQuantity(itemId: CartItemType['id']) {
    dispatch(incrementQuantityAction(itemId));
  }

  function handleDecrementQuantity(itemId: CartItemType['id']) {
    dispatch(decrementQuantityAction(itemId));
  }

  function createNewOrder(data: Order) {
    console.log('data', data);

    dispatch(createNewOrderAction(data));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        handleIncrementQuantity,
        handleDecrementQuantity,
        createNewOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
