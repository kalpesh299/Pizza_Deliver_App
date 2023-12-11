import React from 'react'
import { Link } from 'react-router-dom'

export const OrderDone = () => {
  return (
    <div className='w-screen h-screen'>
        <h1 className='text-center text-green-500 font-bold text-4xl p-4'>Food Order Placed SUccessfully! <span className='text-red-500'>Thank You for Order 😉</span></h1>
        <img className='w-full h-3/4 m-auto ' src='https://i.pinimg.com/originals/6b/15/25/6b1525302df7a2226bdd0b586712110a.gif'/>
       <Link to={'/'}>
       <buton className='block rounded-lg m-auto md:w-1/12 w-3/4  mt-2 bg-red-500 p-2 text-white font-bold'>⬅ Go Back</buton>
       </Link>
        
        </div>
  )
}
