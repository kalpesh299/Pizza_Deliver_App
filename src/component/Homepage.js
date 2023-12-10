import React, { useEffect } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { getpizzaforHome } from '../actions/Allactions';
import { Link } from 'react-router-dom';
import { usePizzaContext } from '../context/PizzaContext';
import { PizzaCardHome } from './PizzaCardHome';

export const Homepage = () => {
    const {state,dispatch}=usePizzaContext();
    useEffect(()=>{

        getpizzaforHome(dispatch);
        // console.log(state.pizzashome);

    },[])
  return (
    <div>
        

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/homepage" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://cdn5.vectorstock.com/i/thumb-large/51/19/pizza-delivery-logo-fast-delivery-logo-logo-vector-10385119.jpg" class="h-14" alt="Flowbite Logo" />
     
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
 <div className='text-xl flex justify-center items-center'> <FaCartShopping/></div>
    <input className='w-4/12 p-1 mr-1' placeholder='Search'/>
    <Link to={"/ordernow"}>
    <button type="button" class="text-white bg-orange-600 hover:bg-white hover:text-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ORDER ONLINE</button>
    </Link>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="/homepage" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:dark:text-blue-500 md:hover:text-orange-600" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">PAGES</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-orange-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">MENU</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">EVENT</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">BLOG</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
<div className='bg-orange-600 h-80 w-screen flex justify-center items-center flex-col'>
<p className='text-white font-bold '>CHOOSE YOUR FAVOURITE</p>
<h1 className='text-white font-bold text-4xl'>MENU LIGHT</h1>
</div>
<div className='w-screen flex justify-center items-center'>
    {state.pizzashome.map((pizza)=>{
      return (<PizzaCardHome key={pizza.id} pizza={pizza}/>)
    })}
    
    
</div>


    </div>
  )
}
