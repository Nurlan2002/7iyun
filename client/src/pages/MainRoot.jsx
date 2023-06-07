import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../companents/Navbar'

const MainRoot = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    
    </>
  )
}

export default MainRoot