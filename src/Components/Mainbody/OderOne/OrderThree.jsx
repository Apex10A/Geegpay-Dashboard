import React from 'react'
import OrderImageOne from '../../../assets/icons/Group 3 (1).png' 
import OrderImageLogo from '../../../assets/icons/icon (1).png' 
import UpTrends from '../../../assets/icons/Up (1).png' 

const OrderThree = () => {
  return (
    <div className='bg-white mx-4 w-full md:mx-4 rounded-2xl  px-7 py-5 items-center' id='Order'>
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
                <h1 className='md:text-xl font-semibold opacity-[0.5] py-3'>Average Sales</h1>
                <p className='font-semibold text-3xl pb-3 opacity-[0.9]'>1567</p>
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

export default OrderThree
