import React, { memo } from 'react'

// Interfaces
import * as ICoffee from '../../../../interfaces/Coffee'
import * as ICartItem from '../../../../interfaces/CartItem'

// Global components
import ProductImage from '../../../../components/ProductImage'
import AddAndSubtract from '../../../../components/AddAndSubtract'

// Styles
import {
  ProductContainer,
  CategoryText,
  CoffeeName,
  UnitaryValue,
  CoffeeDescription,
  BuyArea,
  ValueContainer,
  CurrencySymbol,
  AmountValue,
  SeeCartTextButton,
} from './styles'

interface ProductProps {
  coffee: ICoffee.model
  quantityItem: ICartItem.model | null
}

const Product: React.FC<ProductProps> = memo(
  ({ coffee, quantityItem }: ProductProps) => {
    return (
      <ProductContainer>
        <ProductImage
          srcPath={coffee.imageName}
          alternativeText={coffee.name}
          widthImage={120}
        />
        <CategoryText>
          {coffee.categories.map((cat, index) => {
            return <div key={index}>{cat.toUpperCase()}</div>
          })}
        </CategoryText>
        <CoffeeName>{coffee.name}</CoffeeName>
        <CoffeeDescription>{coffee.description}</CoffeeDescription>
        <UnitaryValue>
          valor unitário: R${' '}
          {coffee.price.toFixed(2).toString().replace('.', ',')}
        </UnitaryValue>
        <BuyArea>
          <ValueContainer>
            <CurrencySymbol>R$</CurrencySymbol>
            <AmountValue>
              {quantityItem && quantityItem.quantity
                ? (coffee.price * quantityItem.quantity)
                    .toFixed(2)
                    .toString()
                    .replace('.', ',')
                : '0,00'}
            </AmountValue>
          </ValueContainer>
          <AddAndSubtract quantityItem={quantityItem} coffee={coffee} />
        </BuyArea>
        {quantityItem && <SeeCartTextButton />}
      </ProductContainer>
    )
  },
)

Product.displayName = 'Product'

export default Product
