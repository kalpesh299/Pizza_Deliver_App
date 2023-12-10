import React,{useEffect} from 'react'
import { MdAddLocation } from "react-icons/md";
import { PizzaCards } from './PizzaCards';
import { QuickView } from './QuickView';
import { usePizzaContext } from '../context/PizzaContext';




export const HomeMain = () => {
  const{state}=usePizzaContext();

  return (
   
         <div class="sm:ml-64 ">
       <div class=" ">
         
          <div className=" bg-cover bg-center flex justify-center items-center h-screen w-full bg-[url('https://i.pinimg.com/originals/a3/e0/6c/a3e06c8f7b389ecacdbcd59f2b29fc17.jpg')]">
         <div className=' p-4'>
          <h1 className='text-white font-bold text-3xl md:text-8xl p-2 font-serif'>DELIVERY TO THE<br/>DOORSTEPS</h1>
          <p className='text-white font-bold text-xl p-2 font-mono'><span className='font-bold text-2xl pr-1'>&#x2713;</span>Chooese Your Ingradients</p>
          <p className='text-white font-bold text-xl p-2 font-mono'><span className='font-bold text-2xl pr-1'>&#x2713;</span>Get free delivery 24/7</p>
          <p className='text-white font-bold text-xl p-2 font-mono'><span className='font-bold text-2xl pr-1'>&#x2713;</span>Special gift coupons</p>
          <div className='flex pl-2'>
            <input placeholder='Email' type='email' className='p-4 text-red-500 font-bold h-full mt-2 mr-2 outline-none'/>
            <button className='text-white px-2 bg-red-500 font-bold'>SUBSCRIBE</button>
          </div>
          <p className='text-white font-bold text-xl flex p-2 '><span className='text-yellow-500 pr-2 flex items-center justify-center'><MdAddLocation /></span>Check delevery zone</p>
         </div>
          </div>
        </div>
     <div className='relative border-2  border-black w-full'>
    
<PizzaCards/>
       
   {state.quickview &&<QuickView/>}

     </div>
       </div>
    
  )
}
