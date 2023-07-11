import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Timer, MapPin, CurrencyDollar } from 'phosphor-react'

// Global components
import IconArea from '../../components/IconContainer'

// Context
import { CoffeeContext } from '../../contexts/CoffeeContext'

// Assets
import success from '../../assets/success.svg'

// Styles
import {
  SuccessContainer,
  TitleArea,
  InformativeArea,
  DataArea,
  LineContainer,
  ImageArea,
} from './styles'

const Success = () => {
  const hash = useLocation()
  const { sales } = useContext(CoffeeContext)
  const saleId = hash.pathname.split('/').reverse()[0]
  const currentSale = sales.find((sl) => sl.id === saleId)

  return (
    <SuccessContainer>
      <TitleArea>
        <h1>Uhu! Pedido confirmado!</h1>
        <p>Agora é só aguardar que logo o café chegará até você.</p>
      </TitleArea>
      <InformativeArea>
        <DataArea>
          <LineContainer>
            <IconArea variant="purple">
              <MapPin size={16} weight="fill" />
            </IconArea>
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {currentSale?.paymentForm?.addressForm?.street},{' '}
                  {currentSale?.paymentForm?.addressForm?.addressNumber}.
                </strong>
              </p>
              <p>
                {currentSale?.paymentForm?.addressForm?.neighborhood} -{' '}
                {currentSale?.paymentForm?.addressForm?.city}.
              </p>
            </div>
          </LineContainer>
          <LineContainer>
            <IconArea variant="yellow">
              <Timer size={16} weight="fill" />
            </IconArea>
            <div>
              <p>Previsão de entrega:</p>
              <p>
                <strong>20 min - 30 min.</strong>
              </p>
            </div>
          </LineContainer>
          <LineContainer>
            <IconArea variant="yellowDark">
              <CurrencyDollar size={16} weight="fill" />
            </IconArea>
            <div>
              <p>Pagamento na entrega:</p>
              <p>
                <strong>
                  {currentSale?.paymentForm?.paymentMethod?.description}
                </strong>
              </p>
            </div>
          </LineContainer>
        </DataArea>
        <div>
          <ImageArea src={success} alt="A caminho" />
        </div>
      </InformativeArea>
    </SuccessContainer>
  )
}

export default Success
