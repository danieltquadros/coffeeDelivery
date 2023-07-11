import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.375rem;
  padding: 0.5rem;
  height: 2.375rem;

  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.baseText};

  & svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme.baseHover};
  }
`
