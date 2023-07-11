// Interfaces
import * as IPaymentForm from '../../interfaces/PaymentForm'

// Actions
import { ActionTypes } from './actions'

export function paymentReducer(state: IPaymentForm.model, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PAYMENT:
      return action.payload.newPayment
    case ActionTypes.CLEAR_PAYMENT_FORM:
      return IPaymentForm.defaultInstance
    default:
      return state
  }
}
