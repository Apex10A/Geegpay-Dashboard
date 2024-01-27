import React, {useContext} from 'react';
import ArrowDown from '../../../assets/Icons/Arrow - Down 2.png';
import Line from '../../../assets/Icons/Line.png';
import Bar from '../../../assets/Icons/Bar (1).png';
import BarCharts from './BarCharts';
import { DarkModeContext } from '../../DarkModeContext';
import DatePicker from './DatePickers';


const Sales = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    // <div className={`bg-${darkMode ? 'bg-black' : 'bg-white'} w-full pr-10 grid grid-span-2`} id='Mainbody'>
    <div className={`w-full md:pr-10 grid grid-span-2' ${darkMode ? ' text-white' : 'bg-white text-black'}`} id='bis white'>
      <div className=' border-1 mx-6 w-full rounded-2xl md:pl-2 md:pr-9 py-6' >{/*white*/}
        <div className='flex items-center justify-between pb-5'>
          <div>
            <p className='md:text-2xl text-xl font-semibold lg:pl-0 pl-3'>Sales Trends</p>
          </div>
          <div className='flex items-center'>
            <p className='pr-2'>Sort by:</p>
            <div className='flex px-3 py-2'>      
          <DatePicker/>
            </div>
          </div>
        </div>
        <div className=''>
          <BarCharts />
        </div>
      </div>
    </div>
  );
};

export default Sales;
