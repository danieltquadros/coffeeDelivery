import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 100%;
  padding: 2.5rem 2.5rem 1.5rem 2.5rem;
  border-radius: 6px 32px;
  background: ${(props) => props.theme.baseCard};
  margin-top: 1rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.baseButton};

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const ProductArea = styled.div`
  display: flex;
  gap: 1rem;
`

export const ProductName = styled.h2`
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.baseSubtitle};
  font-size: 1rem;
  font-weight: 400;
`

export const AddSubtractAndRemove = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ValueContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;

  @media (max-width: 1024px) {
    padding-top: 0.5rem;
  }
`

export const AmountValue = styled.div`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  color: ${(props) => props.theme.baseText};
  font-weight: 800;
  line-height: 1.3;
`

export const TotalArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    padding-bottom: 1.5rem;
  }
`

export const TotalItem = styled.div`
  display: flex;
  justify-content: space-between;

  color: ${(props) => props.theme.baseText};
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  & div {
    color: ${(props) => props.theme.baseSubtitle};
    font-size: 1.25rem;
    font-weight: 800;
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;

  text-align: center;
  font-size: 1rem;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};

  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.yellowDark};
  }
`
