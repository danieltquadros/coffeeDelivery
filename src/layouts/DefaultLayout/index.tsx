import { Outlet } from 'react-router-dom'

// Global components
import Header from '../../components/Header'

// Styles
import { LayoutContainer } from './styles'

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </div>
  )
}

export default DefaultLayout
