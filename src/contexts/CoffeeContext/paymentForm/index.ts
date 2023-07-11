import { useReducer } from 'react'

// Interfaces
import * as IPaymentForm from '../../../interfaces/PaymentForm'

// Reducers
import { paymentReducer } from '../../../reducers/payment/reducer'

// Actions
import {
  addNewPaymentAction,
  clearPaymentFormAction,
} from '../../../reducers/payment/actions'

const usePaymentFormContext = () => {
  const [paymentForm, dispatch] = useReducer(
    paymentReducer,
    IPaymentForm.defaultInstance,
  )

  const addNewPayment = (paymentForm: IPaymentForm.model) => {
    dispatch(addNewPaymentAction(paymentForm))
  }

  const clearPaymentForm = () => {
    dispatch(clearPaymentFormAction())
  }

  return { paymentForm, addNewPayment, clearPaymentForm }
}

export default usePaymentFormContext
