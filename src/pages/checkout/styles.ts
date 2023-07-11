import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  margin-top: 5.5rem;

  @media (max-width: 1024px) {
    padding: 0 1rem;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    margin-top: 0;
    padding: 7rem 0;
  }
`

export const LeftArea = styled.div`
  width: 100%;
  & h1 {
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
  }

  @media (max-width: 1024px) {
    // width: 65%;
  }
`

export const RightArea = styled.div`
  width: 448px;

  @media (max-width: 1024px) {
    width: 387px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  & h1 {
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
  }
`
