import styled from 'styled-components'

export const DeliveryContainer = styled.div`
  width: 100%;
  padding: 2.5rem 2.5rem 1.5rem 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.baseCard};
  margin-top: 1rem;

  @media (max-width: 1024px) {
    padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  }

  & .oneLineContainer {
    display: flex;
    align-items: center;
    width: 100%;
  }

  & .lastLineContainer {
    display: flex;
    align-items: center;
    width: 100%;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }

  & .cityAndStateLine {
    display: flex;
    align-items: center;
    width: 55%;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`

export const IconAndSubtitle = styled.div`
  display: flex;
  margin-bottom: 2rem;
  gap: 0.5rem;
`

export const Icon = styled.div`
  & svg {
    color: ${(props) => props.theme.yellow};
  }
`

export const Subtitle = styled.h2`
  color: ${(props) => props.theme.baseSubtitle};
  font-size: 1rem;
  font-weight: 400;
`

export const DeliveryText = styled.p`
  color: ${(props) => props.theme.baseText};
  font-size: 0.875rem;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 0.125rem;
`

export const BaseInput = styled.input`
  padding: 0.75rem;
  background: ${(props) => props.theme.baseInput};
  border: 1px solid ${(props) => props.theme.baseButton};
  border-radius: 4px;
  color: ${(props) => props.theme.baseText};
  &::placeholder {
    color: ${(props) => props.theme.baseLabel};
  }
  &:focus {
    outline: 1px solid ${(props) => props.theme.purple};
  }
  &:disabled {
    color: ${(props) => props.theme.baseLabel};
  }
`

export const CEPInput = styled(BaseInput)`
  width: 200px;
`

export const StreetInput = styled(BaseInput)`
  width: 100%;
`

export const AddressNumber = styled(BaseInput)`
  width: (100% - 1rem);
  margin-right: 1rem;
`

export const AddressComplement = styled(BaseInput)`
  width: 70%;
  margin-bottom: 1.375rem;
`

export const NeighborhoodContainer = styled.div`
  width: calc(45% - 1rem);
  margin-right: 1rem;

  @media (max-width: 600px) {
    width: 100%;
    margin-right: 0;
  }
`

export const Neighborhood = styled(BaseInput)`
  width: 100%;
`

export const CityContainer = styled.div`
  width: calc(85% - 1rem);
  margin-right: 1rem;
`

export const City = styled(BaseInput)`
  width: 100%;
`

export const StateContainer = styled.div`
  width: 15%;
`
export const State = styled(BaseInput)`
  width: 100%;
`

export const LoadingCircular = styled.div`
  position: relative;
  right: 32px;

  & span {
    color: ${(props) => props.theme.purple};
  }
`

export const WithoutLoading = styled.div`
  width: 16px;
`

export const CepErrorMessage = styled.div`
  color: ${(props) => props.theme.red};
  font-size: 0.875rem;
  font-weight: 400;
`

export const FormErrorMessage = styled.div`
  color: ${(props) => props.theme.red};
  font-size: 0.75rem;
  font-weight: 400;
  margin-top: 0.125rem;
  margin-bottom: 0.625rem;
  height: 0.625rem;
`
