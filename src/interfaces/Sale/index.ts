import * as IPaymentForm from '../PaymentForm'

export interface model {
  id: string
  paymentForm: IPaymentForm.model
}

export const defaultInstance = {
  id: '',
  paymentForm: IPaymentForm.defaultInstance,
}
