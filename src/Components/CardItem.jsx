import React from 'react'
import { useDispatch } from 'react-redux'
import {add, remove} from '../Redux/Slices/CartSlice'

const CardItem = ({item, itemIndex}) => {
    
    const dispatch = useDispatch()

    const removeFromCart = ()=>
        {
            dispatch(remove(item.id))
        }
  return (

   

    <div className='w-full bg-slate-600 mt-2 mb-4'>
      
      <div className='flex w-full h-[95%] outline  rounded-lg'>
            <div className='w-[30%] bg-slate-500 '>
                  <img className=' w-[9rem] h-[12rem] mix-blend-multiply rounded-md p-2' src = {item.image}></img>
            </div>
            <div className='flex flex-col w-[70%]  bg-slate-500 gap-2'>
              <h1 className='font-semibold'>{item.title}</h1>
              <p className=' overflow-x-hidden'>{item.description}</p>
              <div className='flex justify-between place-content-end h-[2.5rem]'>
                <p>Price: &#x20B9;{item.price} </p>
                <button className ='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-0 m-1 px-3 uppercase
                 hover:bg-gray-700 hover:text-white transition duration-400 ease-in' onClick={removeFromCart}>Delete</button>
              </div>
              
            </div>
      </div>
    </div>
    
        
  )
}

export default CardItem
