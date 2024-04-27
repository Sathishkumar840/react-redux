import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate=useNavigate()
  return (
    <div className='p-3 bg-secondary'>
        <h2 className='text-3xl text-center'>Redux Learning</h2>

        <div className="row justify-content-center pt-2 pb-1">
            <div className=' justify-center col-sm-12 col-md-6 col-lg-6 col-xl-5 d-flex'>
                <button className='btn btn-success me-4' onClick={() => navigate('/')}>Home</button>
                <input className='form control' type="search" placeholder='search..' />
                <button className='btn btn-success ms-4' onClick={() =>navigate("/cart")}>Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Header