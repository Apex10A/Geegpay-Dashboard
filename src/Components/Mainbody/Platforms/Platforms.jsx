import React from 'react'

const Platforms = () => {
  return (
    <div className=' mx-4 rounded-2xl my-4 px-7 py-5 items-center' >
        <div className='flex items-center justify-between pb-5'>
        <div>
            <h1 className='text-xl font-bold opacity-[0.8]'>Top Platforms</h1>
        </div>
        <div>
            <p>See All</p>
        </div>
        </div>

        <div className=''>
        <div className='block py-4'>
            <h1 className='font-semibold opacity-[0.8] pb-3'>Book Bazar</h1>
            <div className='w-full bg-gray-100 rounded-full h-4'>
                <div className='h-full bg-[#6160dc] rounded-full w-[40%]'></div>
            </div>
            
            <div className='flex items-center pt-3 justify-between'>
            <div>
            <p>$2,500,000</p>
            </div>
            <div>
                <p>+15%</p>
            </div>
            </div>

        </div>

        <div className='block py-4'>
        <h1 className='font-semibold opacity-[0.8] pb-3'>Book Bazar</h1>
            <div className='w-full bg-gray-100 rounded-full h-4'>
                <div className='h-full bg-[#54c5eb] rounded-full w-[30%]'></div>
            </div>

            <div className='flex items-center pt-3 justify-between'>
            <div>
            <p>$2,500,000</p>
            </div>
            <div>
                <p>+15%</p>
            </div>
            </div>
        </div>

        <div className='block pb-8'>
        <h1 className='font-semibold opacity-[0.8] pb-3'>Book Bazar</h1>
            <div className='w-full bg-gray-100 rounded-full h-4'>
                <div className='h-full bg-[#ffb74a] rounded-full w-[20%]'></div>
            </div>

            <div className='flex items-center pt-3 justify-between'>
            <div>
            <p>$2,500,000</p>
            </div>
            <div>
                <p>+15%</p>
            </div>
            </div>
        </div>

        <div className='block'>
        <h1 className='font-semibold opacity-[0.8] pb-3'>Book Bazar</h1>
            <div className='w-full bg-gray-100 rounded-full h-4'>
                <div className='h-full bg-[#ff5560] rounded-full w-[20%]'></div>
            </div>

            <div className='flex items-center pt-3 justify-between'>
            <div>
            <p>$2,500,000</p>
            </div>
            <div>
                <p>+15%</p>
            </div>
            </div>
        </div>
      
        </div>
    </div>
  )
}

export default Platforms
