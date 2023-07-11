import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 5.5rem;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: 600px) {
    margin-top: 0;
    padding-top: 6.5rem;
  }
`

export const TitleArea = styled.div`
  margin-bottom: 1.75rem;

  & h1 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme.yellowDark};
    line-height: 1.2;
  }

  & p {
    color: ${(props) => props.theme.baseTitle};
    font-size: 1.25rem;
  }
`

export const InformativeArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const DataArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;

  background: linear-gradient(${(props) => props.theme.background} 0 0)
      padding-box,
    linear-gradient(
        to bottom right,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      )
      border-box;
  border: 1px solid transparent;
  border-radius: 6px 32px;

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const ImageArea = styled.img`
  @media (max-width: 600px) {
    width: 100%;
  }
`
