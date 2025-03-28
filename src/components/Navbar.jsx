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

  const navLinks = [
    { text: 'Explore', tag: '/' },
    { text: 'Boy', tag: '/Boy' },
    { text: 'Girl', tag: '/Girl' },
    { text: 'Dress', tag: '/Dress' },
  ]

  return (
    <div className="header">
      <nav className="navbar">
        <div className="nav">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.tag} className="link">
              {link.text}
            </Link>
          ))}
        </div>

        <img
          onClick={() => setOpenHamburger(!openHamburger)}
          className="hamburger"
          src={HamburgerIcon}
          alt="hamburger"
        />

        {openHamburger && (
          <div className="nav-hamburger">
            {navLinks.map((link, index) => (
              <Link
                onClick={() => setOpenHamburger(!openHamburger)}
                to={link.tag}
                className="link"
                key={index}
              >
                {link.text}
              </Link>
            ))}
          </div>
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
