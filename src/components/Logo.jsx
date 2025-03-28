import React from 'react'
import '../styles/logo.css'
import LogoStore from '../assets/icons/logo.svg'

function Logo() {
  return (
    <div className='logo-container'>
        <img className='logo' src={LogoStore} alt="logo" />
    </div>
  )
}

export default Logo