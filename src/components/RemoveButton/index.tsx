import { useContext, useState } from 'react'

// MUI
import Box from '@mui/material/Box'

// Phosphor
import { Trash } from 'phosphor-react'

// Context
import { CoffeeContext } from '../../contexts/CoffeeContext/index.tsx'

// Interfaces
import * as CartItem from '../../interfaces/CartItem'

// Global components
import ConfirmModal from '../modals/ConfirmRemoval'

// Styles
import { Button } from './styles.ts'

interface RemoveButtonProps {
  coffeeId: number | null
}

const RemoveButton = ({ coffeeId }: RemoveButtonProps) => {
  const { itemsInCart } = useContext(CoffeeContext)
  const coffeeToRemove: CartItem.model | null =
    itemsInCart.find((ctr) => ctr.item.id === coffeeId) || null

  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const [lastItem, setLastItem] = useState(false)

  const verifyCart = () => {
    if (coffeeToRemove) {
      if (itemsInCart.length === 1) {
        setLastItem(true)
      } else {
        setLastItem(false)
      }
      setOpenConfirmModal(true)
    }
  }

  const handleRemove = () => {
    verifyCart()
  }

  return (
    <Box>
      <Button onClick={handleRemove}>
        <Trash size={14} weight="bold" />
        REMOVER
      </Button>
      {coffeeToRemove && (
        <ConfirmModal
          openConfirmModal={openConfirmModal}
          onOpenConfirmModal={setOpenConfirmModal}
          coffeeToRemove={coffeeToRemove}
          lastItem={lastItem}
        />
      )}
    </Box>
  )
}

export default RemoveButton
