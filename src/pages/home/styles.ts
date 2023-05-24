import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  gap: 3.5rem;
  padding: 5.875rem 0;

  img {
    width: 42.5%;
  }
`

export const DescriptionArea = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 1.4;
    font-weight: 800;
    color: ${(props) => props.theme.baseTitle};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme.baseSubtitle};
    line-height: 1.3;
  }

  & .descriptionItemList {
    display: flex;
    justify-content: space-between;

    margin-top: 4rem;
  }

  & .descriptionItemColumn {
  }
`

export const DescriptionItem = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1.25rem;
  gap: 0.75rem;

  font-size: 1rem;
  line-height: 1;
`

export const MainContainer = styled.main`
  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme.baseSubtitle};
    margin-bottom: 3rem;
  }
`
