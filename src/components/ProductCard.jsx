import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = (props) => {
  const navigate =useNavigate();
  return (
    <div className='card m-2 w-[300px] items-center curser-pointer' role='button' onClick={() =>navigate(`/product/${props.id}`)}>
        <div className='mt-2'>
            <img className='border-radius h-[200px] w-[200px]' src={props.thumbnail} height={150} width={180} alt={props.title} />
        </div>
        <div className="card-body ">
            <h5 className='card-title text-xl'>{props.title}</h5>
            <h6 className='mt-2'>Price: {`$${props.price}`}</h6>
            <h6 className='mt-2'>Discount:{props.discountPercentage}%</h6>
            <h6 className='mt-2'>Rating: {props.rating}</h6>
        </div>
        <div>
          {props.stock >0 ? <button className='btn btn-success'>Available</button>:<button className='btn btn-danger'>Out Of Stock</button>}
        </div>
    </div>
  )
}

export default ProductCard