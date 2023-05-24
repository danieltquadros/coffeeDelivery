import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'

import {
  AddAdnSubtractContainer,
  ControlsArea,
  SubtractButton,
  AmountArea,
  AddButton,
  CartButton,
} from './styles'

const AddAndSubtract = () => {
  return (
    <AddAdnSubtractContainer>
      <ControlsArea>
        <SubtractButton>
          <Minus size={14} weight="bold" />
        </SubtractButton>
        <AmountArea>1</AmountArea>
        <AddButton>
          <Plus size={14} weight="bold" />
        </AddButton>
      </ControlsArea>
      <CartButton>
        <ShoppingCartSimple size={22} weight="fill" />
      </CartButton>
    </AddAdnSubtractContainer>
  )
}

export default AddAndSubtract
