import * as ICoffee from '../../../../interfaces/coffee'
import ProductImage from '../../../../components/ProductImage'
import AddAndSubtract from '../../../../components/AddAndSubtract'

import {
  ProductContainer,
  CategoryText,
  CoffeeName,
  CoffeeDescription,
  BuyArea,
  ValueContainer,
  CurrencySymbol,
  UnitaryValue,
} from './styles'

interface ProductProps {
  coffee: ICoffee.model
}

const Product = ({ coffee }: ProductProps) => {
  return (
    <ProductContainer>
      <ProductImage srcPath={coffee.imageName} alternativeText={coffee.name} />
      <CategoryText>
        {coffee.categories.map((cat, index) => {
          return <div key={index}>{cat.toUpperCase()}</div>
        })}
      </CategoryText>
      <CoffeeName>{coffee.name}</CoffeeName>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>
      <BuyArea>
        <ValueContainer>
          <CurrencySymbol>R$</CurrencySymbol>
          <UnitaryValue>
            {coffee.price.toFixed(2).toString().replace('.', ',')}
          </UnitaryValue>
        </ValueContainer>
        <AddAndSubtract />
      </BuyArea>
    </ProductContainer>
  )
}

export default Product
