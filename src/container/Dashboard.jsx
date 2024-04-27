import React from 'react'
import { ProductList } from '../data/ProductList'
import ProductCard from '../components/ProductCard'

const Dashboard = () => {
  return (
    <div className='d-flex flex-wrap justify-center p-4'>
        {ProductList.map((product) =><ProductCard{...product} key={product.id} /> )}
    </div>
  )
}

export default Dashboard