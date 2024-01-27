import React from 'react'
import OrderImageOne from '../../../assets/icons/Group 3.png' 
import OrderImageLogo from '../../../assets/icons/icon.png' 
import UpTrends from '../../../assets/icons/Up.png'
import './Order.css' 

const OrderOne = () => {
  return (
    <div className='bg-white mx-4 w-full md:mx-4 rounded-2xl mb-2 px-7 py-5 items-center' id='Order'>
        <div className='flex items-center justify-between'>
        <div>
            <img src={OrderImageLogo} alt="" />
        </div>
        <div>
            <img src={OrderImageOne} alt="" />
        </div>
        </div>

        <div className='pb-2'>
            <div>
                <h1 className='md:text-xl font-semibold opacity-[0.5] py-3'>Total Order</h1>
                <p className='font-semibold text-3xl pb-3 opacity-[0.9]'>350</p>
            </div>
        </div>

        <div className='flex items-center justify-between'>
        <div className=''>
            <img src={UpTrends} alt="" />
        </div>
        <div>
            <p>vs, previous month</p>
        </div>
        </div>


      
    </div>
  )
}

export default OrderOne
