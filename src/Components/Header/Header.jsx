import React, { useState, useContext } from 'react';
import Search from '../../assets/Icons/icon - Search.png';
import Date from '../../assets/Icons/solar_calendar-linear.png';
import Bell from '../../assets/Icons/Bell.png';
import Pfp from '../../assets/Icons/Rectangle 1061.png';
import ArrowDown from '../../assets/Icons/Arrow - Down 2.png';
import Dropdowns from './Dropdowns';
import { DarkModeContext } from '../DarkModeContext';
import ArrowRight from '../../assets/Icons/arrow-right.png';
import Logo from '../../assets/Icons/Vector.png';
import Sidebar from '../Sidebar/Sidebar';

const Header = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className={`border-opacity-50 border py-7 flex justify-between items-center px-4 shadow-lg ${darkMode ? 'bg-[#1e293b] text-white' : 'bg-white text-[#1e293b]'}`}>
      {/* Hamburger Icon for Small Screens */}
      

      {/* Sidebar Component */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Header Content */}
      <div>
        <h1 className='pl-2 font-bold text-2xl'>Dashboard</h1>
      </div>

      <div className='flex items-center gap-10'>
        <div className='xl:flex hidden items-center border-opacity-50 border rounded-[40px] lg:w-[400px] '>
          <img src={Search} className='pl-3' alt="" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-transparent rounded-[40px] p-2 flex-grow " id='inputs'
          />
        </div>

        <div className='lg:flex hidden items-center gap-2'>
          <img src={Date} alt="" />
          <p>November 15, 2023</p>
        </div>

        <div>
          <img src={Bell} alt="" />
        </div>

        <div className='flex items-center gap-2 border-2 rounded-[40px] pl-2 pr-3 py-1'>
          <div>
            <img src={Pfp} alt="" />
          </div>
          <div className=''>
            <p className='font-bold'>Justin Bergson</p>
            <p className='text-sm'>Justin@gmail.com</p>
          </div>
          <div className='transform'>
            <Dropdowns />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
