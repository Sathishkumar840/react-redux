import React from 'react'
import Header from '../components/Header'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Product from './Product'
import Cart from './Cart'
import CheckOut from './Checkout'
import Success from './Success'

const Home = () => {
  return (
    <div>
      <Header/>
      <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/checkout'>
            <Route path='' element={<CheckOut/>}/>
            <Route path=':id' element={<CheckOut/>}/>
            
          </Route>
          <Route path='/success' element={<Success/>}/>
      </Routes>
    </div>
  )
}

export default Home