import { useReducer } from 'react'

// Interfaces
import * as ISale from '../../../interfaces/Sale'

// Reducers
import { saleReducer } from '../../../reducers/sale/reducer'

// Actions
import { addNewSaleAction } from '../../../reducers/sale/actions'

const useSalesContext = () => {
  const recoveredSales = localStorage.getItem('@coffeeShop:sales-1.0.0')
  const [sales, dispatch] = useReducer(
    saleReducer,
    recoveredSales ? JSON.parse(recoveredSales) : [],
  )

  const addNewSale = (newSale: ISale.model) => {
    dispatch(addNewSaleAction(newSale))
  }

  return { sales, addNewSale }
}

export default useSalesContext
