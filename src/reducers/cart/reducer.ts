// Interfaces
import * as ICartItem from '../../interfaces/CartItem'

// Actions
import { ActionTypes } from './actions'

export function cartReducer(state: ICartItem.model[], action: any) {
  let newState = []
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE:
      if (action.differential) {
        newState = state.map((st: ICartItem.model) => {
          if (st.item.id === action.payload.newItem.item.id) {
            return action.payload.newItem
          }
          return st
        })
      } else {
        newState = [...state, action.payload.newItem]
      }
      return newState
    case ActionTypes.SUBTRACT_COFFEE:
      if (action.differential) {
        newState = state.filter(
          (st: ICartItem.model) =>
            st.item.id !== action.payload.newItem.item.id,
        )
      } else {
        newState = state.map((st: ICartItem.model) => {
          if (st.item.id === action.payload.newItem.item.id) {
            return action.payload.newItem
          }
          return st
        })
      }
      return newState
    case ActionTypes.REMOVE_COFFEE:
      newState = state.filter(
        (st: ICartItem.model) => st.item.id !== action.payload.coffeeId,
      )
      return newState
    case ActionTypes.CLEAR_CART:
      return []
    default:
      return state
  }
}
