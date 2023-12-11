import React from 'react'
import { MdHomeFilled ,MdFindInPage ,MdMenuBook,MdEvent,MdOutlinePostAdd,MdFlightLand  } from "react-icons/md";
import { HomeMain } from './HomeMain';
import { FaFacebookF,FaLinkedinIn,FaInstagram,FaKiwiBird  } from "react-icons/fa6";
import { Link } from 'react-router-dom';
export const SidebarWithContent = () => {
  return (
    <div >
   
 
    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
       <span class="sr-only">Open sidebar</span>
       <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
       <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
       </svg>
    </button>
    
    <aside id="default-sidebar" class=" fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
       <div class="h-full px-3 py-4 overflow-y-auto bg-white  dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
             <li>
                <a href="#" class="flex items-center p-2 text-gray-900  dark:text-white   group ">
                  
                   <span class="ms-3 h-1/6 w-3/6  border-black shadow-md rounded-full"><img className='rounded-full' src='https://cdn5.vectorstock.com/i/thumb-large/51/19/pizza-delivery-logo-fast-delivery-logo-logo-vector-10385119.jpg'/></span>
                </a>
             </li>
             <li>
               
               <a href="/homepage" class="flex text-orange-500 items-center pl-8 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <MdHomeFilled />
                   <span class="flex-1 ms-3 whitespace-nowrap ">HOME</span>
                  
                </a>
             
               
             </li>
             <li>
                <a href="#" class="flex items-center pl-8 p-1.5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <MdFindInPage />
                   <span class="flex-1 ms-3 whitespace-nowrap">PAGES</span>
                </a>
             </li>
             <li>
                <a href="/homepage" class="flex items-center pl-8 p-1.5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <MdMenuBook />
                   <span class="flex-1 ms-3 whitespace-nowrap">MENU</span>
                </a>
             </li>
             <li>
                <a href="#" class="flex items-center pl-8 p-1.5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <MdEvent />
                   <span class="flex-1 ms-3 whitespace-nowrap">EVENTS</span>
                </a>
             </li>
             <li>
                <a href="#" class="flex items-center pl-8 p-1.5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <MdOutlinePostAdd />
                   <span class="flex-1 ms-3 whitespace-nowrap">BLOGS</span>
                </a>
             </li>
             <li>
                <a href="#" class="flex items-center pl-8 p-1.5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <MdFlightLand />
                   <span class="flex-1 ms-3 whitespace-nowrap">LANDING</span>
                </a>
             </li>
          </ul>
         
          <div className='mt-56  '>
          <div className='flex justify-evenly p-1'><FaFacebookF /> <FaLinkedinIn /> <FaInstagram /><FaKiwiBird /></div>
          <Link to={'/ordernow'}>
          <h1 className='bg-orange-600 py-2 font-bold text-white text-center'>ORDER ONLINE</h1>
          </Link>
           
       </div>
       </div>
    
    </aside>
    <HomeMain/>
    </div>
      )
}
