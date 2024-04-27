import React, { useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { ProductList } from '../data/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/reducer/cart';

const Product = () => {
  const params = useParams();
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const props = ProductList.find((element) => element.id === parseInt(params.id));


  const list=useSelector ((state)=> state.cart.list)
  const element= list.find((item)=> item.id ===props.id)

  const [alert,setAlert] = useState(false);

  const addToCart = () => {
    setAlert(true);
    setTimeout(()=> setAlert(false),3000);
    dispatch(addItem(props));


  };



  return (
    <div className='card m-2 items-center'>
      {alert && <span className='alert alert-success'>Item added to cart</span>}
      <div className='mt-2'>
        <img className='border-radius h-[200px] w-[200px]' src={props.thumbnail} height={350} width={400} alt={props.title} />
      </div>
      <div className="mt-3 card-body ">
        <h5 className='card-title text-xl'>{props.title}</h5>
        <h6 className='mt-2'>Price: {`$${props.price}`}</h6>
        <h6 className='mt-2'>Discount:{props.discountPercentage}%</h6>
        <h6 className='mt-2'>Rating: {props.rating}</h6>
      </div>
      <div className='mt-4'>
        {props.stock > 0 ? <>
          <button className='btn btn-success' onClick={()=> navigate(`/checkout/${props.id}`)} >Buy now</button>
          {element?.count > 0 ?  <button className='btn btn-outline-warning ms-4 ' onClick={()=>navigate('/cart')}>Go to Cart</button> :<button className='btn btn-success ms-4 ' onClick={addToCart}>Add to Cart</button>}
          

        </> : <button className='btn btn-danger'>Out Of Stock</button>}
      </div>
    </div>
  )
}

export default Product