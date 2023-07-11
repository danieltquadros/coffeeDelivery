import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

// Local components
import DeliveryAddress from './components/DeliveryAddress'
import PaymentArea from './components/PaymentArea'
import CartArea from './components/CartArea'

// Contexts
import { CoffeeContext } from '../../contexts/CoffeeContext/index.tsx'

// StyledComponents
import { CheckoutContainer, LeftArea, RightArea } from './styles.ts'

const Checkout = () => {
  const navigate = useNavigate()
  const {
    itemsInCart,
    paymentForm,
    addNewPayment,
    clearCart,
    clearPaymentForm,
    sales,
    addNewSale,
  } = useContext(CoffeeContext)

  const [invalidForm, setInvalidForm] = useState(false)
  const [orderConfirmationAttempt, setOrderConfirmationAttempt] =
    useState(false)

  const checkData = () => {
    const cep = !!paymentForm.addressForm.cepValue
    const street = !!paymentForm.addressForm.street
    const number = !!paymentForm.addressForm.addressNumber
    const neighborhood = !!paymentForm.addressForm.neighborhood
    const city = !!paymentForm.addressForm.city
    const state = !!paymentForm.addressForm.state
    const paymentMethod = !!paymentForm.paymentMethod
    const cart = !!paymentForm.cart[0].item.id
    if (
      cep &&
      street &&
      paymentMethod &&
      number &&
      neighborhood &&
      city &&
      state &&
      cart
    ) {
      setInvalidForm(false)
      return true
    }
    setInvalidForm(true)
    return false
  }

  const handleConfirmOrder = () => {
    setOrderConfirmationAttempt(!orderConfirmationAttempt)
    const formApproved = checkData()
    if (formApproved) {
      const newSale = {
        id: uuidv4(),
        paymentForm,
      }
      addNewSale(newSale)
      clearCart()
      clearPaymentForm()
      navigate(`/success/${newSale.id}`)
      console.log(sales)
    }
  }

  useEffect(() => {
    addNewPayment({
      ...paymentForm,
      cart: itemsInCart,
    })
    if (itemsInCart.length === 0) {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsInCart])

  return (
    <CheckoutContainer>
      <LeftArea>
        <h1>Complete seu pedido</h1>
        <DeliveryAddress
          invalidForm={invalidForm}
          orderConfirmationAttempt={orderConfirmationAttempt}
        />
        <PaymentArea
          invalidForm={invalidForm}
          orderConfirmationAttempt={orderConfirmationAttempt}
        />
      </LeftArea>
      <RightArea>
        <h1>Cafés selecionados</h1>
        <CartArea onConfirmOrder={handleConfirmOrder} />
      </RightArea>
    </CheckoutContainer>
  )
}

export default Checkout
