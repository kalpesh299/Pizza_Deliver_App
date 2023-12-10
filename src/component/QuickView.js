import React from 'react'
import './QuickView.css'
import { usePizzaContext } from '../context/PizzaContext';
import {toggleQuickview} from '../actions/Allactions'
import { Link } from 'react-router-dom';
export const QuickView = () => {
  const{state,dispatch}=usePizzaContext();
  // console.log(state.quickviwedata[0].linkImagen);
  return (
    <div className="absolute w-full h-screen flex justify-center items-center qv " >
              <div className='md:w-8/12 w-2/4 h-2/4 md:h-2/3 border-2 border-black bg-white flex p-6'>
                    <div className='w-2/4 h-full flex items-center justify-center rounded-xl  bg-gray-100'>
                    <img src={state.quickviwedata[0].linkImagen} className='w-3/4 h-3/4 rounded-lg'/>
                   
                    </div>
                    <div>
                      <h1 className='text-end font-bold text-2xl text-red-500 cursor-pointer ' onClick={()=>toggleQuickview(dispatch)}>X</h1>
                      <h1 className='pl-2 font-bold text-2xl'>{state.quickviwedata[0].nombre}</h1>
                      <h2 className='p-2'>⭐⭐⭐⭐</h2>
                      <h1 className='p-2 font-bold text-lg'>₹{state.quickviwedata[0].precio}</h1>
                      <p className='pl-2 '>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                        <h2 className='p-2 text-yellow-500 font-bold'>NUTRITIONAL VALUE PER 100 G:</h2>
                        <p className='pl-2 text-gray-500 '>Calories_ _ _ _ _ _ _ _ _ _ _ _ _<span className='text-red-500 font-bold'>800cal</span></p>
                        <p className='pl-2 text-gray-500'>Carbohydrates_ _ _ _ _ _ _ _ _ _ _ _ _<span className='text-red-500 font-bold'>20g</span></p>
                        <p className='pl-2 text-gray-500'>Squirrels_ _ _ _ _ _ _ _ _ _ _ _ _<span className='text-red-500 font-bold'>30g</span></p>
                        <p className='pl-2 text-gray-500'>Fats_ _ _ _ _ _ _ _ _ _ _ _ _<span className='text-red-500 font-bold'>50g</span></p>
                        
                        <Link to={'/ordernow'}>
                        <button className='p-2 ml-2 mt-10 bg-red-500 text-white font-bold'>ADD TO CART</button>
                        </Link>
                    </div>
              </div>
        </div>
  )
}
