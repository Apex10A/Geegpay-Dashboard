import React, { useContext } from 'react';
import { DarkModeContext } from '../DarkModeContext';
import Sales from './SalesTrend/Sales';
import OrderOne from './OderOne/OrderOne';
import OrderCompile from './OderOne/OrderCompile';
import CustomerOrder from './CustomersOrder/CustomerOrder';
import Platforms from './Platforms/Platforms';
import CustomerDetails from './CustomersOrder/CustomerDetails';

const Mainbody = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
   
    <div className={`w-full md:pr-10  grid grid-span-2' ${darkMode ? 'bg-[#1e293b] text-white' : 'bg-white text-[#1e293b]'}`} id='bg is white'>
      <div className='xl:grid xl:grid-cols-3 gap-10 '>
        <div className='md:col-span-2'>
          <Sales />
        </div>
        <div className='md:col-span-1'>
          <OrderCompile />
        </div>
      </div>

      <div className='xl:grid xl:grid-cols-3'>
        <div className='col-span-2'>
          {/* <CustomerOrder /> */}
          <CustomerDetails/>
        </div>
        <div className='col-span-1'>
          <Platforms />
        </div>
      </div>
    </div>
  );
};

export default Mainbody;
