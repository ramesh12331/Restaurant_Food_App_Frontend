import React from 'react'
import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import ProductMenu from './components/ProductMenu'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<LandingPage/>} />
        <Route path='/products/:firmId' element = {<ProductMenu/>} />
      </Routes>
    </div>
  )
}

export default App
