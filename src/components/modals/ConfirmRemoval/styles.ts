import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: ${(props) => props.theme.background};
  box-shadow: ${(props) => props.theme.baseText};
  padding: 1.5rem;
  overflow-y: auto;

  & h2 {
    line-height: 1;
  }

  & .alertContainer {
    font-size: 1rem;
  }

  & .lastItemMessage {
    margin-top: 0.75rem;
  }
`

export const FooterArea = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`

export const CancelButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  height: fit-content;

  color: ${(props) => props.theme.purpleDark};
  font-weight: 600;
  font-size: 0.875rem;

  &:hover {
    color: ${(props) => props.theme.purple};
  }
`

export const ConfirmButton = styled.button`
  padding: 0.75rem 1rem;

  text-align: center;
  font-size: 0.875rem;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};

  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.yellowDark};
  }
`
