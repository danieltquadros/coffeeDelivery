// Interfaces
import * as ICartItem from '../../interfaces/CartItem'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  SUBTRACT_COFFEE = 'SUBTRACT_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  CLEAR_CART = 'CLEAR_CART',
}

export function addNewCoffeeAction(
  newItem: ICartItem.model,
  differential: boolean,
) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      newItem,
    },
    differential,
  }
}

export function subtractCoffeeAction(
  newItem: ICartItem.model,
  differential: boolean,
) {
  return {
    type: ActionTypes.SUBTRACT_COFFEE,
    payload: {
      newItem,
    },
    differential,
  }
}

export function removeCoffeeAction(coffeeId: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffeeId,
    },
  }
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}
