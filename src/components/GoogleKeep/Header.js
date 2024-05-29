import React from 'react'
import "./googlekeep.css";
import Logo from './images.png'

const Header = () => {
  return (
    <div>
        <div className="main-nav">
           <img src={Logo} />
           <h3>Hariom Notes</h3>
        </div>
    </div>
  )
}

export default Header;
