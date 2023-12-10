import React ,{useEffect}from 'react'
import { getAllpizzas } from '../actions/Allactions';
import { usePizzaContext } from '../context/PizzaContext';
import { PizzaCard } from './PizzaCard';

export const PizzaCards = () => {

  const {state,dispatch}=usePizzaContext();

  useEffect(()=>{

      getAllpizzas(dispatch);
     console.log(state.pizzatypes)

  },[])
     

  return (
    <div className='absolute flex flex-wrap w-full '>
 {
  state.pizzatypes.map((pizza)=>{
     return(<PizzaCard key={pizza.id} pizza={pizza}/>) 
  })
 }
         
        

    </div>
  )
}
