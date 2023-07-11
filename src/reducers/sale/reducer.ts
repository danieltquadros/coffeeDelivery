// Interfaces
import * as ISale from '../../interfaces/Sale'

// Actions
import { ActionTypes } from './actions'

export function saleReducer(state: ISale.model[], action: any) {
  let newState = []
  switch (action.type) {
    case ActionTypes.ADD_NEW_SALE:
      newState = [...state, action.payload.newSale]
      return newState
    default:
      return state
  }
}
