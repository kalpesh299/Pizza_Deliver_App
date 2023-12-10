import { GET_ALL_PIZZA,SHOW_QUICK_VIEW,SENT_PIZZA_QUICKVIEW,GET_PIZZA_FOR_HOME } from "./Actions";

import {getPizza,getPizzaforHome}from '../axios.config/axiosData'


export const getAllpizzas=async(dispatch)=>{

 try{
  const pizzadata=await getPizza();
  dispatch({type:GET_ALL_PIZZA,payload:pizzadata.productos}) 
 }catch(error){
console.log(error)
 }
  
  }

  export const toggleQuickview=(dispatch,pizza)=>{
    dispatch({type:SENT_PIZZA_QUICKVIEW,payload:pizza})
    dispatch({type:SHOW_QUICK_VIEW})
    
  }

  export const getpizzaforHome=async(dispatch)=>{
  try{
    const pizzadata=await getPizzaforHome();
    // console.log(pizzadata);
    dispatch({type:GET_PIZZA_FOR_HOME,payload:pizzadata.promo})
    // console.log("hello")
  }catch(error){
console.log(error)
  }
  }

