import React from 'react'
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import Tapbar from '../components/Tapbar'
import { Outlet } from 'react-router-dom'

function HomepageLayout() {
  return (
    <div>
        <Navbar />
        <Logo />
        <Tapbar />
        <Outlet />
    </div>
  )
}

export default HomepageLayout