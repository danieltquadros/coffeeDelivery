import { ChangeEvent, useContext, useState, useEffect } from 'react'

// Phosphor-react
import { MapPinLine } from 'phosphor-react'

// MUI
import CircularProgress from '@mui/material/CircularProgress'

// Services
import { getCepRequest } from '../../../../services/api'

// Context
import { CoffeeContext } from '../../../../contexts/CoffeeContext/index.tsx'

// Styled components
import {
  DeliveryContainer,
  AddressComplement,
  AddressNumber,
  CepErrorMessage,
  FormErrorMessage,
  CEPInput,
  CityContainer,
  City,
  DeliveryText,
  Icon,
  IconAndSubtitle,
  InputContainer,
  LoadingCircular,
  NeighborhoodContainer,
  Neighborhood,
  StateContainer,
  State,
  StreetInput,
  Subtitle,
  WithoutLoading,
} from './styles.ts'

interface DeliveryAddressProps {
  invalidForm: boolean
  orderConfirmationAttempt: boolean
}
const DeliveryAddress = ({
  invalidForm,
  orderConfirmationAttempt,
}: DeliveryAddressProps) => {
  const { addNewPayment, paymentForm } = useContext(CoffeeContext)

  const [cepValue, setCepValue] = useState(paymentForm.addressForm.cepValue)
  const [cepError, setCepError] = useState('')
  const [street, setStreet] = useState('')
  const [addressNumber, setAddressNumber] = useState(
    paymentForm.addressForm.addressNumber,
  )
  const [addressComplement, setAddressComplement] = useState(
    paymentForm.addressForm.addressComplement || '',
  )
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const [disableNeighborhood, setDisableNeighborhood] = useState(false)
  const [disableStreet, setDisableStreet] = useState(false)
  const [cepLoading, setCepLoading] = useState(false)

  const [cepErrorForm, setCepErrorForm] = useState('')
  const [streetErrorForm, setStreetErrorForm] = useState('')
  const [numberErrorForm, setNumberErrorForm] = useState('')
  const [neighborhoodErrorForm, setNeighborhoodErrorForm] = useState('')
  const [cityErrorForm, setCityErrorForm] = useState('')
  const [stateErrorForm, setStateErrorForm] = useState('')

  const resetValues = () => {
    setStreet('')
    setAddressNumber('')
    setAddressComplement('')
    setNeighborhood('')
    setCity('')
    setState('')

    setCityErrorForm('')
    setStateErrorForm('')

    setDisableNeighborhood(false)
    setDisableStreet(false)
  }

  const getCep = async (cepToRequest: string, noReset?: boolean) => {
    setCepLoading(true)
    const newAddress = await getCepRequest(cepToRequest)
    if (newAddress.cep) {
      if (!noReset) {
        resetValues()
      }
      if (newAddress?.logradouro) {
        setStreet(newAddress.logradouro)
        setDisableStreet(true)
      }
      if (newAddress?.bairro) {
        setNeighborhood(newAddress?.bairro)
        setDisableNeighborhood(true)
      }
      setCity(newAddress.localidade)
      setState(newAddress.uf)
    } else {
      setCepError('CEP não localizado.')
      resetValues()
    }
    setCepLoading(false)
  }

  const handleCep = (cep: string, noReset?: boolean) => {
    setCepError('')
    setCepErrorForm('')
    let newCep = cep.replace(/\D/g, '')
    if (newCep.length <= 8) {
      if (newCep.length === 8) {
        getCep(newCep, noReset)
      }
      newCep = newCep.replace(/(\d{5})(\d{3})/, '$1-$2')
      setCepValue(newCep)
    }
  }

  useEffect(() => {
    const noReset = true
    if (cepValue !== '') {
      handleCep(cepValue, noReset)
    }
  }, [])

  const handleStreet = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setStreetErrorForm('')
    setStreet(event.target.value)
  }

  const handleAddressNumber = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNumberErrorForm('')
    setAddressNumber(event.target.value)
  }

  const handleAddressComplement = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setAddressComplement(event.target.value)
  }

  const handleNeighborhood = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNeighborhoodErrorForm('')
    setNeighborhood(event.target.value)
  }

  const handleCity = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setCityErrorForm('')
    setCity(event.target.value)
  }

  const handleState = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setStateErrorForm('')
    if (event.target.value.length <= 2) {
      const newStateFormat = event.target.value.toUpperCase()
      setState(newStateFormat)
    }
  }

  useEffect(() => {
    if (street !== '') {
      setStreetErrorForm('')
    }
    if (addressNumber !== '') {
      setNumberErrorForm('')
    }
    if (neighborhood !== '') {
      setNeighborhoodErrorForm('')
    }
    addNewPayment({
      ...paymentForm,
      addressForm: {
        cepValue,
        street,
        addressNumber,
        addressComplement,
        neighborhood,
        city,
        state,
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    cepValue,
    street,
    addressNumber,
    addressComplement,
    neighborhood,
    city,
    state,
  ])

  useEffect(() => {
    if (invalidForm) {
      if (paymentForm.addressForm.cepValue === '') {
        setCepErrorForm('CEP é obrigatório')
      }
      if (paymentForm.addressForm.street === '') {
        setStreetErrorForm('Logradouro é obrigatório')
      }
      if (paymentForm.addressForm.addressNumber === '') {
        setNumberErrorForm('Número é obrigatório')
      }
      if (paymentForm.addressForm.neighborhood === '') {
        setNeighborhoodErrorForm('Bairro é obrigatório')
      }
      if (paymentForm.addressForm.city === '') {
        setCityErrorForm('Cidade é obrigatório')
      }
      if (paymentForm.addressForm.state === '') {
        setStateErrorForm('UF é obrigatório')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invalidForm, orderConfirmationAttempt])

  return (
    <DeliveryContainer>
      <IconAndSubtitle>
        <Icon>
          <MapPinLine size={22} weight="bold" />
        </Icon>
        <div>
          <Subtitle>Endereço de entrega</Subtitle>
          <DeliveryText>
            Informe o endereço onde deseja receber seu pedido.
          </DeliveryText>
        </div>
      </IconAndSubtitle>
      <InputContainer>
        <CEPInput
          id="cep"
          name="cep"
          title="CEP*"
          placeholder="CEP*"
          value={cepValue}
          onChange={(event) => handleCep(event.target.value)}
          disabled={cepLoading}
        />
        {cepLoading ? (
          <LoadingCircular>
            <CircularProgress size={16} />
          </LoadingCircular>
        ) : (
          <WithoutLoading />
        )}
        <CepErrorMessage>{cepError}</CepErrorMessage>
      </InputContainer>
      <FormErrorMessage>{cepErrorForm}</FormErrorMessage>
      <StreetInput
        id="street"
        name="street"
        title="Logradouro*"
        placeholder="Rua*"
        value={street}
        onChange={handleStreet}
        disabled={cepLoading || disableStreet}
      />
      <FormErrorMessage>{streetErrorForm}</FormErrorMessage>
      <div className="oneLineContainer">
        <div>
          <AddressNumber
            id="addressNumber"
            name="addressNumber"
            title="Número*"
            placeholder="Número*"
            value={addressNumber}
            onChange={handleAddressNumber}
            disabled={cepLoading}
          />
          <FormErrorMessage>{numberErrorForm}</FormErrorMessage>
        </div>
        <AddressComplement
          id="addressComplement"
          name="addressComplement"
          title="Complemento"
          placeholder="Complemento"
          value={addressComplement}
          onChange={handleAddressComplement}
          disabled={cepLoading}
        />
      </div>
      <div className="lastLineContainer">
        <NeighborhoodContainer>
          <Neighborhood
            id="neighborhood"
            name="neighborhood"
            title="Bairro*"
            placeholder="Bairro*"
            value={neighborhood}
            onChange={handleNeighborhood}
            disabled={cepLoading || disableNeighborhood}
          />
          <FormErrorMessage>{neighborhoodErrorForm}</FormErrorMessage>
        </NeighborhoodContainer>
        <div className="cityAndStateLine">
          <CityContainer>
            <City
              id="city"
              name="city"
              title="Cidade* - Campo preenchido pelo CEP."
              placeholder="Cidade*"
              value={city}
              onChange={handleCity}
              disabled={true}
            />
            <FormErrorMessage>{cityErrorForm}</FormErrorMessage>
          </CityContainer>
          <StateContainer>
            <State
              id="state"
              name="state"
              title="*Estado - Campo preenchido pelo CEP."
              placeholder="UF*"
              value={state}
              onChange={handleState}
              disabled={true}
            />
            <FormErrorMessage>{stateErrorForm}</FormErrorMessage>
          </StateContainer>
        </div>
      </div>
    </DeliveryContainer>
  )
}

export default DeliveryAddress
