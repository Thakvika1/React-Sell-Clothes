import SearchIcon from '../assets/icons/search-icon.svg'
import HamburgerIcon from '../assets/icons/hamburger.svg'
import '../styles/navbar.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [openHamburger, setOpenHamburger] = useState(false)

  useEffect(() => {
    const handleResize = () =>
      window.innerWidth > 600 && setOpenHamburger(false)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = ['Explore', 'Boy', 'Girl', 'Dress']

  return (
    <div className="header">
      <nav className="navbar">
        <ul className="nav">
          {navLinks.map((link, index) => (
            <a key={index} href="#">
              <li className="element">{link}</li>
            </a>
          ))}
        </ul>

        <img
          onClick={() => setOpenHamburger(!openHamburger)}
          className="hamburger"
          src={HamburgerIcon}
          alt="hamburger"
        />

        {openHamburger && (
          <ul className="nav-hamburger">
            {navLinks.map((link, index) => (
              <a key={index} href="#">
                <li className="element">{link}</li>
              </a>
            ))}
          </ul>
        )}

        <div className="search">
          <img className="icon" src={SearchIcon} alt="search" />
          <input className="input" type="search" placeholder="Search Clothes" />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
