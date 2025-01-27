import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Card from '../Components/Card'
import CardItem from '../Components/CardItem'




const Cart = () => {

  const {cart} = useSelector((state) =>state)
  const [totalAmount, setTotalAmount] = useState(0)


  useEffect(()=>{
    setTotalAmount( Math.round(cart.reduce((acc, curr)=> acc + curr.price,0)))
  },[cart])

  return (
    <div className='w-full min-h-[100vh] md:min-h-[93.5vh] bg-slate-600'>
      {
        cart.length>0?
        (<div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 w-[100%] md:w-[50%] pl-[1.5rem] md:pl-0 md:ml-72 md:pb-5'>
          <div className='w-[90%] md:w-[150%] mt-5'>
            {
              cart.map((item, index)=> <CardItem key = {item.id} item = {item} itemIndex = {index}/>)
            }
          </div>
          <div className='grid grid-cols-1 grid-rows-2 w-[90%] md:w-[45%] h-[25vh] md:h-[40vh] justify-between outline mt-7 xl:ml-[22rem] mb-5  bg-slate-500 rounded-lg pl-2'>
            <div className=''>
              <div>
                <p>Your Cart</p>
              </div>
              <div>
                <h2>Summary</h2>
              </div>
              <div>
                Total Item : {cart.length} 
              </div>
            </div>
            
            <div className=' content-end'>
              <div>
                Total Amount: &#x20B9;{totalAmount}
              </div>
              <button className ='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-0 m-1 px-3 uppercase
                 hover:bg-gray-700 hover:text-white transition duration-400 ease-in'>
                <a href='https://mail.google.com/mail/u/0/?fs=1&to=alokyes55@gmail.com%20&su=Interview%20Scheduled&body=Hi%20Alok%20Prajapati,%20Thank%20you%20for%20exploring%20a%20career%20at%20[YOUR%20COMPANY].%20Congratulations!%20You%20have%20advanced%20to%20the%20next%20stage%20of%20our%20hiring%20process%20and%20will%20receive%20further%20notifications%20on%20our%20assessments%20and%20its%20schedule.&bcc=%20&tf=cm' target="_blank">Checkout</a>
              
              </button>
            </div>


          </div>
        </div>) :
        (
          <div className='w-full h-[93vh] bg-gray-400 flex justify-center items-center flex-col'>
            <h2 className='text-2xl font-semibold'>Cart Empty</h2>
            <br/>
            <NavLink to='/'>
              <button className='text-xl font-medium border-2 rounded-md'>Shop Now</button>
            </NavLink>
            
            
          </div>
        )
      }
    </div>
  )
}

export default Cart
