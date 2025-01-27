import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const NavBar = () => {


  const {cart} = useSelector((state)=>state)

  return (
    <div className='flex justify-around items-center h-[3rem] max-w-10xl '>
      <NavLink to='/'>
       <div className='font-bold text-2xl text-white'>Good Shop</div>
      </NavLink>
      
      <div className='flex gap-x-2'>
        <NavLink to='/'>
        <div className='font-bold text-1.5xl text-white gap-5'>Home</div>
        </NavLink>
        <NavLink to='/cart'>
        <div className='relative font-bold text-1.5xl text-white'>Cart
        {
          cart.length>0 &&
          <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center
          items-center animate-bounce rounded-full text-white'>{cart.length}</span>
        }
        </div>
        
        </NavLink>
        
        
      </div>
    </div>
  )
}

export default NavBar
