import { CartItemType, Order } from './reducer';

export enum ActionTypes {
  AddItem = 'ADD_ITEM',
  RemoveItem = 'REMOVE_ITEM',
  IncrementQuantity = 'INCREMENT_QUANTITY',
  DecrementQuantity = 'DECREMENT_QUANTITY',
  CreateNewOrder = 'CREATE_NEW_ORDER',
}

export type Actions =
  | {
      type: ActionTypes.AddItem;
      payload: CartItemType;
    }
  | {
      type: ActionTypes.RemoveItem;
      payload: number;
    }
  | {
      type: ActionTypes.IncrementQuantity;
      payload: number;
    }
  | {
      type: ActionTypes.DecrementQuantity;
      payload: number;
    }
  | {
      type: ActionTypes.CreateNewOrder;
      payload: Order;
    };

export function addItemAction(item: CartItemType) {
  return { type: ActionTypes.AddItem, payload: item } satisfies Actions;
}

export function removeItemAction(itemId: CartItemType['id']) {
  return { type: ActionTypes.RemoveItem, payload: itemId } satisfies Actions;
}

export function incrementQuantityAction(itemId: CartItemType['id']) {
  return {
    type: ActionTypes.IncrementQuantity,
    payload: itemId,
  } satisfies Actions;
}

export function decrementQuantityAction(itemId: CartItemType['id']) {
  return {
    type: ActionTypes.DecrementQuantity,
    payload: itemId,
  } satisfies Actions;
}

export function createNewOrderAction(data: Order) {
  return {
    type: ActionTypes.CreateNewOrder,
    payload: data,
  } satisfies Actions;
}
