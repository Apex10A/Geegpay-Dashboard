import React, { useState, useContext } from 'react';
import Logo from '../../assets/Icons/Vector.png';
import Category from '../../assets/Icons/Component 8.png';
import Trends from '../../assets/Icons/Component 10.png';
import User from '../../assets/Icons/Component 9.png';
import Brokenbox from '../../assets/Icons/Component 11.png';
import Verified from '../../assets/Icons/Component 12.png';
import LightMode from '../../assets/Icons/brightness 1.png';
import DarkMode from '../../assets/Icons/moon 1.png';
import ArrowRight from '../../assets/Icons/arrow-right.png';
import Setting from '../../assets/Icons/setting-2.png';
import Logout from '../../assets/Icons/logout.png';
import Box from '../../assets/Icons/Component 13.png';
import { DarkModeContext } from '../DarkModeContext';

const Sidebar = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className={`fixed top-0 left-0 h-full border-opacity-50 border text-white flex flex-col items-center justify-start pt-6  lg:w-32 w-20gap-10 ${darkMode ? 'bg-[#1e293b]' : 'bg-white'}`} style={{ zIndex: 1000 }}>
      {/* Hamburger Icon for Small Screens */}
      

      {/* Sidebar Content */}
      <div className='lg:block'>
        {/* Other Menu Items */}
        <div className='flex flex-col items-center justify-center gap-7 pt-3'>
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className='group active bg-gray-200 rounded-xl '>
            <img src={Category} className='hover:bg-gray-200 rounded-3xl group-[.active]:bg-gray-200 duration-300 ' alt="" />
          </div>

          <div className='group'>
            <img src={Trends} className='hover:bg-gray-200 group-[.active]:bg-gray-200 rounded-xl duration-500 cursor-pointer' alt="" />
          </div>

          <div className='group'>
            <img src={User} alt="" className='hover:bg-gray-200 group-[.active]:bg-gray-200 rounded-xl duration-500 cursor-pointer' />
          </div>

          <div className='group'>
            <img src={Box} className='hover:bg-gray-200 group-[.active]:bg-gray-200 rounded-xl duration-500 cursor-pointer' alt="" />
          </div>
          <div className='group'>
            <img src={Brokenbox} className='group-[.active]:bg-gray-200 hover:bg-gray-200 rounded-xl cursor-pointer duration-500' alt="" />
          </div>

          <div className='group'>
            <img src={Verified} alt="" className='group-[.active]:bg-gray-200 cursor-pointer duration-500 hover:bg-gray-200 rounded-xl' />
          </div>
        </div>

        {/* Dark Mode Buttons */}
        <div className='px-3 py-3 flex flex-col items-center justify-center mt-14 rounded-3xl'>
          <div className={`pb-4 ${darkMode ? '' : ''}`}>
            <button onClick={toggleDarkMode}>
              <img src={LightMode} alt="" className='light' />
            </button>
          </div>
          <div className={`${darkMode ? '' : ''}`}>
            <button onClick={toggleDarkMode}>
              <img src={DarkMode} alt="" className='dark' />
            </button>
          </div>
        </div>

        {/* Additional Icons */}
        <div className='flex flex-col items-center justify-center px-5 pt-6 gap-5 mt-auto absolute bottom-10'>
          <div>
            <img src={ArrowRight} alt="" className='group-[.active]:bg-gray-200 hover:opacity-[0.5] duration-300 hover:scale-105 cursor-pointer' />
          </div>
          <div>
            <img src={Setting} alt="" className='group-[.active]:bg-gray-200 hover:opacity-[0.5] duration-300 hover:scale-105 cursor-pointer' />
          </div>
          <div>
            <img src={Logout} alt="" className='group-[.active]:bg-gray-200 hover:opacity-[0.5] duration-300 hover:scale-105 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
