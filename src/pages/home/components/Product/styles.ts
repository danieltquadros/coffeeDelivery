import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 16rem;
  height: 19.375rem;

  border-radius: 6px 36px;

  background-color: ${(props) => props.theme.baseCard};

  img {
    position: absolute;
    top: -25px;

    width: 7.5rem;
  }
`

export const CategoryText = styled.div`
  display: flex;
  margin: 107px 0 1rem 0;
  gap: 0.25rem;

  div {
    padding: 0.25rem 0.5rem;
    border-radius: 12px;

    background: ${(props) => props.theme.yellowLight};
    color: ${(props) => props.theme.yellowDark};
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 1.3;
  }
`

export const CoffeeName = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.3;
  color: ${(props) => props.theme.baseSubtitle};
`

export const CoffeeDescription = styled.p`
  margin: 1rem 1.25rem 2rem 1.25rem;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.3;
  color: ${(props) => props.theme.baseLabel};
  text-align: center;
`

export const BuyArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem 1.25rem 1.5rem;
  width: 100%;
`

export const ValueContainer = styled.div`
  display: 'flex';
  align-items: center;
  width: 100%;
`

export const CurrencySymbol = styled.div``

export const UnitaryValue = styled.div`
  font-family: 'Baloo 2', sans-serif;
`
