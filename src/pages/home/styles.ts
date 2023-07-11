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

  @media (max-width: 1024px) {
    // max-width: 100%;
    // margin: 0 1rem;
    gap: 1.5rem;
    padding: 5.875rem 1rem 2rem 1rem;

    img {
      width: 28.5%;
    }
  }

  @media (max-width: 600px) {
    padding: 6.5rem 1rem 2rem 1rem;
    img {
      align-self: center;
      width: 42.5%;
    }
  }
`

export const DescriptionArea = styled.div`
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

    @media (max-width: 1024px) {
      margin-top: 2rem;
    }

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }

  & .descriptionItemColumn {
  }
`

export const TitleArea = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 1.3;
    font-weight: 800;
    color: ${(props) => props.theme.baseTitle};
    margin-bottom: 0.5rem;

    @media (max-width: 600px) {
      font-size: 1.75rem;
    }
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
  margin-bottom: 6rem;

  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme.baseSubtitle};
    margin-bottom: 3rem;

    @media (max-width: 1024px) {
      padding-left: 1rem;
    }
  }

  & .productListContainer {
    display: flex;
    flex-wrap: wrap;

    gap: 2rem;

    @media (max-width: 1024px) {
      justify-content: center;
    }
  }
`
