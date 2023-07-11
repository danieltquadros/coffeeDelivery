import styled from 'styled-components'

export const AddAndSubtractContainer = styled.div`
  display: flex;
  align-items: center;
`

export const AmountArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.125rem;
  height: 2.375rem;

  background: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.baseTitle};

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1;
`

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.125rem;
  height: 2.375rem;
  border: 0;

  cursor: pointer;

  background: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.purple};

  &:not(:disabled):hover {
    background: ${(props) => props.theme.baseHover};
    color: ${(props) => props.theme.purpleDark};
  }

  &:disabled {
    cursor: default;
  }
`

export const SubtractButton = styled(BaseButton)`
  border-radius: 6px 0 0 6px;
`

export const AddButton = styled(BaseButton)`
  border-radius: 0 6px 6px 0;
`
