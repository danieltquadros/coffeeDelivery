import styled from 'styled-components'

export const AddAdnSubtractContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`

export const ControlsArea = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const AmountArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.5rem;
  height: 2.375rem;

  background: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.baseTitle};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3;
`

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.5rem;
  height: 2.375rem;
  border: 0;

  background: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.purple};
`

export const SubtractButton = styled(BaseButton)`
  border-radius: 6px 0 0 6px;
`

export const AddButton = styled(BaseButton)`
  border-radius: 0 6px 6px 0;
`

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 6px;

  background: ${(props) => props.theme.purpleDark};
  color: ${(props) => props.theme.baseCard};
`
