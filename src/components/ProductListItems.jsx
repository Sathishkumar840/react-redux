import React from 'react'

const ProductListItems = (props) => {
  return (

    <div className=' d-flex m-2  align-items-center justify-center' >

      
        <img className='border-radius-9 me-4' src={props.thumbnail} alt={props.title} />
  

      <h5 className='card-title text-xl me-4'>{props.title}</h5>
      <h6 className='mt-2 me-4'>Price: {`$${props.price}`}</h6>
      <h6 className='mt-2 me-4'>Discount:{props.discountPercentage}%</h6>
      <h6 className='mt-2 me-4'>Rating: {props.rating}</h6>

      <div className='mt-4 me-4'>
        <button className='btn btn-danger ms-3' onClick={props.incrementItem}>+</button>
        <span className='ms-3'>Quantity{props.count}</span>
        <button className='btn btn-danger ms-3' onClick={props.decrementItem} >-</button>
        <button className='btn btn-danger ms-3' onClick={props.removeItem}>Remove</button>
      </div>


    </div>
  )
}

export default ProductListItems