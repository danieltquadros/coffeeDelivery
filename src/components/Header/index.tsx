import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'

import { HeaderContainer, LocationArea, CartArea } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Home" />
      <div className="locationAndCart">
        <LocationArea>
          <MapPin size={24} weight="fill" />
          <p>Florianópolis, SC</p>
        </LocationArea>
        <CartArea>
          <ShoppingCart size={24} weight="fill" />
          <div>3</div>
        </CartArea>
      </div>
    </HeaderContainer>
  )
}

export default Header
