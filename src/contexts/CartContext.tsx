import { ReactNode, useEffect, useReducer } from 'react';
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
import { useNavigate } from 'react-router-dom';

interface CartContextProviderProps {
  children: ReactNode;
}

export interface CartContextType {
  cart: CartItemType[];
  orders: Order[];
  addItem: (item: CartItemType) => void;
  removeItem: (itemId: CartItemType['id']) => void;
  handleIncrementQuantity: (itemId: CartItemType['id']) => void;
  handleDecrementQuantity: (itemId: CartItemType['id']) => void;
  createNewOrder: (order: Order) => void;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const navigate = useNavigate();
  const [cartsState, dispatch] = useReducer(
    cartsReducer,
    cartsInitialState,
    (cartsInitialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.00'
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
      return cartsInitialState;
    }
  );
  const { cart, orders } = cartsState;

  useEffect(() => {
    if (cartsState) {
      const stateAsJSON = JSON.stringify(cartsState);

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateAsJSON);
    }
  }, [cartsState]);

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

  function createNewOrder(order: Order) {
    dispatch(createNewOrderAction(order));
    navigate(`/pedido/${order.id}/sucesso`);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
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
