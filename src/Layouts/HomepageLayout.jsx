import React from 'react'
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import { Outlet } from 'react-router-dom'

function HomepageLayout() {
  return (
    <div>
      <Navbar />
      <Logo />
      <Outlet />
    </div>
  )
}

export default HomepageLayout
