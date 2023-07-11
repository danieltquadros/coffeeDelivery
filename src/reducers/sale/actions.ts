// Interfaces
import * as ISale from '../../interfaces/Sale'

export enum ActionTypes {
  ADD_NEW_SALE = 'ADD_NEW_SALE',
}

export function addNewSaleAction(newSale: ISale.model) {
  return {
    type: ActionTypes.ADD_NEW_SALE,
    payload: {
      newSale,
    },
  }
}
