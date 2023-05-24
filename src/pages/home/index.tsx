import React, { useState } from 'react'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { coffee as coffeeData } from '../../coffee.json'
import * as ICoffee from '../../interfaces/coffee'
import coffeeCup from '../../assets/coffeeCup.svg'

import IconArea from './components/IconContainer'
import Product from './components/Product'
import {
  HeaderContainer,
  DescriptionArea,
  DescriptionItem,
  MainContainer,
} from './styles'

const Home = () => {
  const [coffeeList] = useState<ICoffee.model[]>(coffeeData)

  console.log(coffeeList)

  return (
    <>
      <HeaderContainer>
        <DescriptionArea>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </p>
          <div className="descriptionItemList">
            <div className="descriptionItemColumn">
              <DescriptionItem>
                <IconArea variant="cart">
                  <ShoppingCart size={16} weight="fill" />
                </IconArea>
                Compra simples e segura
              </DescriptionItem>
              <DescriptionItem>
                <IconArea variant="timer">
                  <Timer size={16} weight="fill" />
                </IconArea>
                Entrega rápida e rastreada
              </DescriptionItem>
            </div>
            <div className="descriptionItemColumn">
              <DescriptionItem>
                <IconArea variant="package">
                  <Package size={16} weight="fill" />
                </IconArea>
                Embalagem mantém o café intacto
              </DescriptionItem>
              <DescriptionItem>
                <IconArea variant="coffee">
                  <Coffee size={16} weight="fill" />
                </IconArea>
                O café chega fresquinho até você
              </DescriptionItem>
            </div>
          </div>
        </DescriptionArea>
        <img src={coffeeCup} alt="" />
      </HeaderContainer>
      <MainContainer>
        <h1>Nossos cafés</h1>
        {coffeeList.map((cf: ICoffee.model) => (
          <Product key={cf.id} coffee={cf} />
        ))}
      </MainContainer>
    </>
  )
}

export default Home
