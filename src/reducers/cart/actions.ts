import { CartItem } from './reducer';

export enum ActionTypes {
  AddItem = 'ADD_ITEM',
  RemoveItem = 'REMOVE_ITEM',
}

export interface Actions {
  type: ActionTypes;
  payload: CartItem;
}

export function addItemAction(item: CartItem) {
  return { type: ActionTypes.AddItem, payload: item };
}

export function removeItemAction(item: CartItem) {
  return { type: ActionTypes.RemoveItem, payload: item };
}
