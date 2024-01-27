import React from 'react'
import OrderOne from './OrderOne'
import OrderTwo from './OrderTwo'
import OrderThree from './OrderThree'
import OrderFour from './OrderFour'

const OrderCompile = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-3 mt-3 mb-10 lg:mb-0 place-items-center ml-4 lg:ml-0'>
        <OrderOne/>
        <OrderTwo/>
        <OrderThree/>
        <OrderFour/>
      
    </div>
  )
}

export default OrderCompile
