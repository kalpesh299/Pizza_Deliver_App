import React from 'react'
import "./Orderpage.css"
import { Link } from 'react-router-dom'

export const OrderPage = () => {
  return (
    <div className="flex items-center justify-center  h-screen w-screen bg-no-repeat bg-cover bg-[url('https://img.freepik.com/premium-photo/background-italian-food-assortment-pizza-black-wooden-background-free-space-text-top-view_187166-56837.jpg')]">
        <div className='form p-4 border-2 border-white rounded-lg back'>
              <div className='bg-red-200 rounded'>
             <h1 className='text-black font-bold p-2 text-3xl font-mono'>WELCOME TO INDIAN PIZZA</h1>
              <h2 className='text-white font-bold p-2 text-lg font-mono'>We Will Deliver pizza in 40 min at your doorsteps</h2>
             </div>
           
             <div className='flex flex-col'>
                <label className='text-white font-bold ml-2 text-md font-mono'>Email</label>
                <input className='w-2/4 font-bold ml-2 text-md font-mono' type='email'/>
             </div>
             <div className='flex flex-col'>
                <label className='text-white font-bold ml-2 text-md font-mono'>Phone</label>
              <div className='ml-2'>
                 <input className='w-1/5' maxLength={3} />
               <input className='w-1/3 ml-2' maxLength={6}/>
               <input className='w-1/4 ml-2'  maxLength={4}/></div>
             </div>
             <div className='flex flex-col p-2'>
                <label className='text-white font-bold  text-md font-mono'>No of Sclices</label>
                <input className='w-2/4' type='email'/>
             </div>
             <div className='flex flex-col p-2'>
                <label className='text-white font-bold  text-md font-mono'>Pizza Size</label>
                <div>
                <input  type="radio"/>
                <label className='text-white'>8-inch</label>
                <input className='ml-1' type="radio"/>
                <label className='text-white'>10-inch</label>
                <input className='ml-1' type="radio"/>
                <label className='text-white'>12-inch</label>
                <input className='ml-1' type="radio"/>
                <label className='text-white'>14-inch</label>
                </div>
             </div>
             <div className='flex flex-col p-2'>
                <label className='text-white font-bold  text-md font-mono' >Pizza Size</label>
                <div>
                <input  type="checkbox"/>
                <label className='text-white'>Pepperoni</label>
                <input className='ml-1' type="checkbox"/>
                <label className='text-white'>Onions</label>
                <input className='ml-1' type="checkbox"/>
                <label className='text-white'>Mashrooms</label>
                <input className='ml-1' type="checkbox"/>
                <label className='text-white'>Sausage</label>
                </div>
             </div>
             <Link to={'/orderdone'}>
             <button className='bg-red-500 text-white font-bold ml-2 p-2 rounded'>Order Now</button>
             </Link>
             
        </div>
    </div>
  )
}
