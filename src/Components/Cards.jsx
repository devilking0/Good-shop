import React from 'react'
import {products} from '../data'
import Card from './Card'

const Cards = () => {
  return (
    <div className=' w-[80%] grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-w-6xl mx-auto  space-y-10 space-x-5 min-h-[80vh] p-4'>
        { products.map((product, index)=><Card key ={index} product = {product}/>)}
    </div>
  )
}

export default Cards
