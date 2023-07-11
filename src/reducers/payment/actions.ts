// Interfaces
import * as IPaymentForm from '../../interfaces/PaymentForm'

export enum ActionTypes {
  ADD_NEW_PAYMENT = 'ADD_NEW_PAYMENT',
  CLEAR_PAYMENT_FORM = 'CLEAR_FORM',
}

export function addNewPaymentAction(newPayment: IPaymentForm.model) {
  return {
    type: ActionTypes.ADD_NEW_PAYMENT,
    payload: {
      newPayment,
    },
  }
}

export function clearPaymentFormAction() {
  return {
    type: ActionTypes.CLEAR_PAYMENT_FORM,
  }
}
