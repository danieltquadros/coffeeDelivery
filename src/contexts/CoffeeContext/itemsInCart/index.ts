import { useReducer } from 'react'

// Interfaces
import * as ICoffee from '../../../interfaces/Coffee'
import * as ICartItem from '../../../interfaces/CartItem'

// Reducers
import { cartReducer } from '../../../reducers/cart/reducer'

// Actions
import {
  addNewCoffeeAction,
  subtractCoffeeAction,
  removeCoffeeAction,
  clearCartAction,
} from '../../../reducers/cart/actions'

const useItemsInCartContext = () => {
  const recoveredCart = localStorage.getItem('@coffeeShop:cartState-1.0.0')
  const [itemsInCart, dispatch] = useReducer(
    cartReducer,
    recoveredCart ? JSON.parse(recoveredCart) : [],
  )

  const addCoffeeInCart = (coffee: ICoffee.model) => {
    const hasInCart: ICartItem.model = itemsInCart.find(
      (ic: ICartItem.model) => ic.item.id === coffee.id,
    )
    let newItem: ICartItem.model
    if (hasInCart && hasInCart.quantity) {
      newItem = {
        quantity: hasInCart.quantity + 1,
        item: hasInCart.item,
      }
    } else {
      newItem = { quantity: 1, item: coffee }
    }
    dispatch(addNewCoffeeAction(newItem, !!hasInCart))
  }

  const subtractCoffeeOfCart = (coffee: ICoffee.model) => {
    const hasInCart = itemsInCart.find(
      (ic: ICartItem.model) => ic.item.id === coffee.id,
    )
    if (hasInCart && hasInCart.quantity > 0) {
      let newItem: ICartItem.model
      let lastItem = false
      if (hasInCart.quantity === 1) {
        newItem = hasInCart
        lastItem = true
      } else {
        newItem = {
          quantity: hasInCart.quantity - 1,
          item: hasInCart.item,
        }
      }
      dispatch(subtractCoffeeAction(newItem, lastItem))
    }
  }

  const removeCoffeeOffCart = (coffeeId: number) => {
    dispatch(removeCoffeeAction(coffeeId))
  }

  const clearCart = () => {
    dispatch(clearCartAction())
  }

  return {
    itemsInCart,
    addCoffeeInCart,
    subtractCoffeeOfCart,
    removeCoffeeOffCart,
    clearCart,
  }
}

export default useItemsInCartContext
