import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// MUI
import { Typography, Alert } from '@mui/material'
import Modal from '@mui/material/Modal'

// Context
import { CoffeeContext } from '../../../contexts/CoffeeContext/index.tsx'

// Interfaces
import * as CartItem from '../../../interfaces/CartItem'

// Styles
import {
  ModalContainer,
  FooterArea,
  CancelButton,
  ConfirmButton,
} from './styles.ts'

interface ConfirmModalProps {
  openConfirmModal: boolean
  onOpenConfirmModal: (openConfirmModal: boolean) => void
  coffeeToRemove: CartItem.model | null
  lastItem: boolean
}

const ConfirmModal = ({
  openConfirmModal,
  onOpenConfirmModal,
  coffeeToRemove,
  lastItem,
}: ConfirmModalProps) => {
  const { removeCoffeeOffCart } = useContext(CoffeeContext)
  const navigate = useNavigate()
  const handleClose = () => {
    onOpenConfirmModal(false)
  }

  const handleRemove = () => {
    if (coffeeToRemove && coffeeToRemove.item.id) {
      removeCoffeeOffCart(coffeeToRemove.item.id)
      if (lastItem) {
        removeCoffeeOffCart(coffeeToRemove.item.id)
        navigate('/')
      }
    }
  }

  return (
    <Modal
      open={openConfirmModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Confirmar Remoção
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Alert severity="warning" className="alertContainer">
            Tem certeza que deseja remover o item{' '}
            {coffeeToRemove && <strong>{coffeeToRemove.item.name}</strong>} do
            carrinho?
            {lastItem && (
              <Typography className="lastItemMessage">
                Ao remover o último item do carrinho, você será redirecionado
                para a página inicial.
              </Typography>
            )}
          </Alert>
        </Typography>
        <FooterArea>
          <CancelButton onClick={handleClose}>Cancelar</CancelButton>
          <ConfirmButton onClick={handleRemove}>REMOVER</ConfirmButton>
        </FooterArea>
      </ModalContainer>
    </Modal>
  )
}

export default ConfirmModal
