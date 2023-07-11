import { ReactNode, createContext, useEffect } from 'react'

// Interfaces
import * as ICoffee from '../../interfaces/Coffee'
import * as ICartItem from '../../interfaces/CartItem'
import * as IPaymentForm from '../../interfaces/PaymentForm'
import * as ISale from '../../interfaces/Sale'

// Contexts
import usePaymentFormContext from './paymentForm'
import useItemsInCartContext from './itemsInCart'
import useSalesContext from './sales'

interface CoffeeContextType {
  itemsInCart: ICartItem.model[]
  paymentForm: IPaymentForm.model
  addCoffeeInCart: (coffee: ICoffee.model) => void
  subtractCoffeeOfCart: (coffee: ICoffee.model) => void
  removeCoffeeOffCart: (coffeeId: number) => void
  clearCart: () => void
  addNewPayment: (paymentForm: IPaymentForm.model) => void
  clearPaymentForm: () => void
  sales: ISale.model[]
  addNewSale: (sale: ISale.model) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const {
    itemsInCart,
    addCoffeeInCart,
    subtractCoffeeOfCart,
    removeCoffeeOffCart,
    clearCart,
  } = useItemsInCartContext()
  const { paymentForm, addNewPayment, clearPaymentForm } =
    usePaymentFormContext()
  const { sales, addNewSale } = useSalesContext()

  useEffect(() => {
    const stateJSON = JSON.stringify(itemsInCart)

    localStorage.setItem('@coffeeShop:cartState-1.0.0', stateJSON)
  }, [itemsInCart])

  useEffect(() => {
    const stateJSON = JSON.stringify(paymentForm)

    localStorage.setItem('@coffeeShop:paymentForm-1.0.0', stateJSON)
  }, [paymentForm])

  useEffect(() => {
    const stateJSON = JSON.stringify(sales)

    localStorage.setItem('@coffeeShop:sales-1.0.0', stateJSON)
  })

  return (
    <CoffeeContext.Provider
      value={{
        itemsInCart,
        paymentForm,
        addCoffeeInCart,
        subtractCoffeeOfCart,
        removeCoffeeOffCart,
        clearCart,
        addNewPayment,
        clearPaymentForm,
        sales,
        addNewSale,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
