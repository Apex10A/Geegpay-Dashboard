import React from 'react'
import OrderImageOne from '../../../assets/icons/Group 3.png' 
import OrderImageLogo from '../../../assets/icons/icon.png' 
import UpTrends from '../../../assets/icons/Up.png' 

const OrderFour = () => {
  return (
    <div className='bg-white mx-4 w-full md:mx-4 rounded-2xl px-7 ml-2 py-5 items-center' id='Order'>
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
                <h1 className='md:text-xl font-semibold opacity-[0.5] py-3'>Total Income</h1>
                <p className='font-semibold text-3xl pb-3 opacity-[0.9]'>$350.000</p>
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

export default OrderFour
