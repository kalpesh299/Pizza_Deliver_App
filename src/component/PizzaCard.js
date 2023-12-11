import React,{useState} from 'react'
import {toggleQuickview} from '../actions/Allactions'
import { usePizzaContext } from '../context/PizzaContext';
import { Link } from 'react-router-dom';

export const PizzaCard = ({pizza}) => {
  const{state,dispatch}=usePizzaContext();
const[isShown,setIsShows]=useState(false);

// console.log(state.quickviwedata);

  return (

   
    <div className='w-1/4 md:h-80 h-40  flex flex-col justify-center items-center' onMouseEnter={()=>{setIsShows(true)}} onMouseLeave={()=>{setIsShows(false)}}>
        {!isShown?(
        <>
        <div className='md:w-30 w-2/4 h-15 md:h-2/4 rounded-full border-2  object-cover'>
        <img className='rounded-full w-full h-full' src={pizza.linkImagen}/>
        </div>
        <h2 className='md:text-lg text-xs text-center font-bold font-mono'>{pizza.nombre}</h2>
        <h2 className='md:text-lg text-xs text-center font-bold font-mono'>{pizza.precio>250?"⭐⭐⭐⭐":"⭐⭐⭐"}</h2>
        <h3 className='md:text-lg text-sm text-center font-bold font-mono'>₹{pizza.precio}</h3>
        </>):(
            <>
            <div className='md:w-8/12  w-2/4 h-15 md:h-2/4  shadow-lg object-cover'>
        <img className='w-full h-full' src={pizza.linkImagen}/>
        </div>
        <h2 className='md:text-3xl text-xs text-center font-bold font-mono'>{pizza.nombre}</h2>
        <h2 className='md:text-2xl text-xs text-center font-bold font-mono'>{pizza.precio>250?"⭐⭐⭐⭐":"⭐⭐⭐"}</h2>
        <h3 className='md:text-2xl text-sm text-center font-bold font-mono'>₹{pizza.precio}</h3>
        <div className='flex justify-evenly '>
         <Link to={"/ordernow"}> <button className='bg-orange-600 md:p-3  rounded-md mr-2'>Add To Cart</button></Link>
        <button className='bg-gray-300 rounded-md  p-3' onClick={()=>toggleQuickview(dispatch,pizza)}>Quick View</button>
        </div>
            </>
        )
        }
        </div>
  )
}
