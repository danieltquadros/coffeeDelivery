import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  background: ${(props) => props.theme.background};
  z-index: 1;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
`

export const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;

  margin: 0 auto;
  max-width: 70rem;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 1.5rem 1.5rem 1rem 1.5rem;
  }

  & .locationAndCart {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const LocationArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;

  background-color: ${(props) => props.theme.purpleLight};
  color: ${(props) => props.theme.purpleDark};
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  line-height: 1.3;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CartArea = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  padding: 0.375rem;
  background: ${(props) => props.theme.yellowLight};
  border-radius: 6px;
  border: none;

  cursor: pointer;

  &:disabled {
    background: ${(props) => props.theme.baseLabel};
    cursor: default;

    svg {
      color: ${(props) => props.theme.white};
    }
    div {
      background: ${(props) => props.theme.baseText};
      color: ${(props) => props.theme.white};
    }
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.yellow};

    svg {
      color: ${(props) => props.theme.yellowLight};
    }

    div {
      color: ${(props) => props.theme.yellow};
    }
  }

  svg {
    color: ${(props) => props.theme.yellowDark};
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: -10px;
    left: 25px;

    background: ${(props) => props.theme.yellowDark};
    color: ${(props) => props.theme.yellowLight};

    padding: 0 0.5rem;
    height: 1.25rem;
    border-radius: 0.625rem;

    font-size: 0.75rem;
    line-height: 1;
  }
`
