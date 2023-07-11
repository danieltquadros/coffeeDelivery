import * as IAddressForm from './AddressForm'
import * as ICartItem from '../CartItem'
import * as IMethod from './PaymentMethod'

export interface model {
  addressForm: IAddressForm.model
  paymentMethod: IMethod.model
  cart: ICartItem.model[]
}

export const defaultInstance = {
  addressForm: IAddressForm.defaultInstance,
  paymentMethod: IMethod.defaultInstance,
  cart: [ICartItem.defaultInstance],
}
