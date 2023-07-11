import { useContext, useEffect, useState } from 'react'

// Phosphor-react
import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'

// Interfaces
import * as IMethod from '../../../../interfaces/PaymentForm/PaymentMethod'

// Contexts
import { CoffeeContext } from '../../../../contexts/CoffeeContext/index.tsx'

// Styled components
import {
  PaymentContainer,
  PaymentIcon,
  IconAndText,
  Subtitle,
  PaymentText,
  ButtonArea,
  BaseButton,
  FormErrorMessage,
} from './styles.ts'

interface PaymentAreaProps {
  invalidForm: boolean
  orderConfirmationAttempt: boolean
}
const PaymentArea = ({
  invalidForm,
  orderConfirmationAttempt,
}: PaymentAreaProps) => {
  const { addNewPayment, paymentForm } = useContext(CoffeeContext)
  const [methodErrorForm, setMethodErrorForm] = useState('')
  const handlePaymentMethod = (
    method: IMethod.PaymentMethodType,
    description: string,
  ) => {
    setMethodErrorForm('')
    addNewPayment({
      ...paymentForm,
      paymentMethod: {
        method,
        description,
      },
    })
  }

  useEffect(() => {
    if (invalidForm) {
      if (paymentForm.paymentMethod.method === '') {
        setMethodErrorForm('Selecione a forma de pagamento.')
      }
    }
  }, [invalidForm, orderConfirmationAttempt])

  return (
    <PaymentContainer>
      <IconAndText>
        <PaymentIcon>
          <CurrencyDollar size={22} />
        </PaymentIcon>
        <div>
          <Subtitle>Pagamento</Subtitle>
          <PaymentText>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </PaymentText>
        </div>
      </IconAndText>
      <ButtonArea>
        <BaseButton
          className={
            paymentForm.paymentMethod.method === 'CREDIT_CARD' ? 'focused' : ''
          }
          onClick={() =>
            handlePaymentMethod('CREDIT_CARD', 'Cartão de crédito')
          }
        >
          <CreditCard size={16} weight="bold" />
          CARTÃO DE CRÉDITO
        </BaseButton>
        <BaseButton
          className={
            paymentForm.paymentMethod.method === 'DEBIT_CARD' ? 'focused' : ''
          }
          onClick={() => handlePaymentMethod('DEBIT_CARD', 'Cartão de débito')}
        >
          <Bank size={16} weight="bold" />
          CARTÃO DE DÉBITO
        </BaseButton>
        <BaseButton
          className={
            paymentForm.paymentMethod.method === 'MONEY' ? 'focused' : ''
          }
          onClick={() => handlePaymentMethod('MONEY', 'Dinheiro')}
        >
          <Money size={16} weight="bold" />
          DINHEIRO
        </BaseButton>
      </ButtonArea>
      <FormErrorMessage>{methodErrorForm}</FormErrorMessage>
    </PaymentContainer>
  )
}

export default PaymentArea
