import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add, remove} from '../Redux/Slices/CartSlice'

const Card = ({product}) => {


  const {cart} = useSelector((state)=>state)
  const dispatch = useDispatch()

  const addHandler = ()=>
  {
     dispatch(add(product))
  }
  const removeHandler = ()=>
  {
    dispatch(remove(product.id))
  }

  return (
      <div className=' flex flex-col items-center justify-center
      hover:scale-105 transition duration-300 ease-in hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]
      gap-5 p-4 mt-10 ml-5 rounded-xl outline bg-white-900 bg-slate-500'>
        <div className='text-white  font-semibold text-lg text-left truncate w-40 mt-1'>
          <p>{product.title}</p>
        </div>
        
        <div className='w-45 text-white font-normal text-[13px] text-left'>
          <p>{product.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>
        <div>
          <img className='w-[9rem] h-[12rem] mix-blend-multiply rounded-md ' src = {product.image}></img>
        </div>
        <div className=' flex justify-between gap-12 items-center w-full mt-5'>
          <div className=''>
            <p className='text-green-600 font-semibold'>&#x20B9;{product.price}</p>
          </div>
          
          <div className='w-[8rem]'>
            {
              
              cart.includes(product)?
              (<button
                className ='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                 hover:bg-gray-700 hover:text-white transition duration-400 ease-in'
                 onClick={removeHandler}>Remove Item</button>):
              (<button 
                className ='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                 hover:bg-gray-700 hover:text-white transition duration-400 ease-in ' 
                onClick={addHandler}>Add to Cart</button>)
            }
            
          </div>
        </div>
        
      
      </div>
    
  )
}

export default Card
