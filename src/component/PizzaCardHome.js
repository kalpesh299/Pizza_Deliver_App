import React from 'react'

export const PizzaCardHome = ({pizza}) => {
  return (
    <div className='ml-4 w-2/12 h-80 pt-4 shadow-lg'>

<div className=' w-3/4 m-auto h-24 md:h-44  md:rounded-full'>
<img src={pizza.linkImagen} className='h-full w-full md:rounded-full' />
<h2 className='text-center py-2 md:text-xl font-bold'>{pizza.nombrePromo}</h2>
<p className='text-center py-2 font-bold'>₹{pizza.precioFinal}</p>
</div>
      


    </div>
  )
}
