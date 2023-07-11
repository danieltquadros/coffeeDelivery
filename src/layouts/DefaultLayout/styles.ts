import styled from 'styled-components'

export const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  padding: 2rem 0;

  @media (max-width: 1024px) {
    margin: 0;
  }

  @media (max-width: 600px) {
    margin: 0;
    padding: 0 1rem;
  }
`
