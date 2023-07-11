import React, { useState, useEffect, useContext } from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

// Assets
import logo from '../../assets/logo.svg'

// Context
import { CoffeeContext } from '../../contexts/CoffeeContext'

// Styles
import { HeaderContainer, LocationArea, CartArea, HeaderArea } from './styles'

const Header = () => {
  const { itemsInCart } = useContext(CoffeeContext)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    let newTotalItems = 0
    for (let i = 0; i < itemsInCart.length; i = i + 1) {
      newTotalItems = newTotalItems + itemsInCart[i]?.quantity
    }
    setTotalItems(newTotalItems)
  }, [itemsInCart])

  const handleRedirect = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (!itemsInCart.length) {
      e.preventDefault()
    }
  }

  return (
    <HeaderContainer>
      <HeaderArea>
        <NavLink to="/" title="Home">
          <img src={logo} alt="Home" />
        </NavLink>
        <div className="locationAndCart">
          <LocationArea>
            <MapPin size={24} weight="fill" />
            <p>Florianópolis, SC</p>
          </LocationArea>
          <NavLink to="/checkout" title="Carrinho" onClick={handleRedirect}>
            <CartArea disabled={!itemsInCart.length}>
              <ShoppingCart size={24} weight="fill" />
              <div>{totalItems}</div>
            </CartArea>
          </NavLink>
        </div>
      </HeaderArea>
    </HeaderContainer>
  )
}

export default Header
