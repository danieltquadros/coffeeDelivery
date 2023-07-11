import styled from 'styled-components'

export const PaymentContainer = styled.div`
  width: 100%;
  padding: 2.5rem 2.5rem 1.5rem 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.baseCard};
  margin-top: 1rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`

export const IconAndText = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
`

export const PaymentIcon = styled.div`
  & svg {
    color: ${(props) => props.theme.purple};
  }
`

export const Subtitle = styled.h2`
  color: ${(props) => props.theme.baseSubtitle};
  font-size: 1rem;
  font-weight: 400;
`

export const PaymentText = styled.p`
  color: ${(props) => props.theme.baseText};
  font-size: 0.875rem;
`

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const BaseButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 11.25rem;
  padding: 1rem;
  border-radius: 6px;

  background: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.baseTitle};
  border: 1px solid transparent;
  cursor: pointer;

  font-size: 0.75rem;
  line-height: 1;

  & svg {
    margin-right: 0.75rem;
    color: ${(props) => props.theme.purple};
  }

  &.focused {
    background: ${(props) => props.theme.purpleLight};
    border: 1px solid ${(props) => props.theme.purple};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const FormErrorMessage = styled.div`
  color: ${(props) => props.theme.red};
  font-size: 0.75rem;
  font-weight: 400;
  margin-top: 0.125rem;
  margin-bottom: 0.625rem;
  height: 0.625rem;
`
