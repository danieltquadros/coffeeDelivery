import { Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/home'
import Checkout from './pages/checkout'
import Success from './pages/success'

// Layouts
import DefaultLayout from './layouts/DefaultLayout'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success/:id" element={<Success />} />
      </Route>
    </Routes>
  )
}
