import React from 'react'
import Logo from "../../../assets/logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <img width="230px" height="80px" src={Logo} alt="Sherbek's Logo" />
        </Link>
      </div>
    </header>
  )
}

export default Header