import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'
import Mainbody from './Components/Mainbody/Mainbody'
import './index.css'
import { DarkModeContextProvider } from './context/darkModeContext';

function App() {

  return (
    <DarkModeContextProvider>
    <div className='flex h-screen '>
      <div className=' lg:block'>
      <Sidebar/>
      </div>
      <div className='xl:ml-32 ml-20'>
        <Header/>
        <Mainbody/>
      </div>
    </div>
    </DarkModeContextProvider>


  )
}

export default App
