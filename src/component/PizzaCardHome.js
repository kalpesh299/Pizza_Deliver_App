import React from 'react'

export const PizzaCardHome = ({pizza}) => {
  return (
    <div className='ml-4 md:w-2/12 w-1/4 md:h-80 pt-4 shadow-2xl md:shadow-lg'>

<div className=' md:w-3/4 w-full m-auto h-24 md:h-44  md:rounded-full'>
<img src={pizza.linkImagen} className='h-full w-full md:rounded-full' />
<h2 className='text-center py-2 md:text-xl font-bold'>{pizza.nombrePromo}</h2>
<p className='text-center py-2 font-bold'>₹{pizza.precioFinal}</p>
</div>
      </div>
  )
}
