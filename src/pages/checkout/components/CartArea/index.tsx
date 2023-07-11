import { useState, useEffect, useContext } from 'react'

// Contexts
import { CoffeeContext } from '../../../../contexts/CoffeeContext/index.tsx'

// Global components
import ProductImage from '../../../../components/ProductImage'
import AddAndSubtract from '../../../../components/AddAndSubtract'
import RemoveButton from '../../../../components/RemoveButton'

// Interfaces
import * as ICartItem from '../../../../interfaces/CartItem'

// Styles
import {
  CartContainer,
  ItemContainer,
  ProductArea,
  ProductName,
  AddSubtractAndRemove,
  AmountValue,
  ValueContainer,
  TotalArea,
  TotalItem,
  Total,
  ConfirmButton,
} from './styles.ts'

interface CartAreaProps {
  onConfirmOrder: () => void
}

const CartArea = ({ onConfirmOrder }: CartAreaProps) => {
  const { itemsInCart } = useContext(CoffeeContext)
  const deliveryValue = 3.5
  const [totalItemsValue, setTotalItemsValue] = useState(0)

  useEffect(() => {
    let newTotalItemsValue = 0
    itemsInCart.map((ic: ICartItem.model) => {
      if (ic.quantity) {
        newTotalItemsValue += ic.item.price * ic.quantity
      }
      return newTotalItemsValue
    })
    setTotalItemsValue(newTotalItemsValue)
  }, [itemsInCart])

  return (
    <CartContainer>
      {itemsInCart.map((ic: ICartItem.model) => {
        return (
          <ItemContainer key={ic.item.id}>
            <ProductArea>
              <ProductImage
                srcPath={ic.item.imageName}
                alternativeText={ic.item.name}
                widthImage={64}
              />
              <div>
                <ProductName>{ic.item.name}</ProductName>
                <AddSubtractAndRemove>
                  <AddAndSubtract
                    quantityItem={ic}
                    coffee={ic.item}
                    noRemove
                    noSubtractInOne
                  />
                  <RemoveButton coffeeId={ic.item.id ? ic.item.id : null} />
                </AddSubtractAndRemove>
              </div>
            </ProductArea>
            <ValueContainer>
              <AmountValue>
                {ic.quantity &&
                  (ic.item.price * ic.quantity).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
              </AmountValue>
            </ValueContainer>
          </ItemContainer>
        )
      })}
      <TotalArea>
        <TotalItem>
          <div>Total de itens</div>
          <div>
            {totalItemsValue.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </div>
        </TotalItem>
        <TotalItem>
          <div>Entrega</div>
          <div>
            {deliveryValue.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </div>
        </TotalItem>
        <Total>
          <div>Total</div>
          <div>
            {(totalItemsValue + deliveryValue).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </div>
        </Total>
        <ConfirmButton onClick={onConfirmOrder}>CONFIRMAR PEDIDO</ConfirmButton>
      </TotalArea>
    </CartContainer>
  )
}

export default CartArea
