import React, { useState } from 'react';
import './Navbar.css'
import Logo from '../../assets/travelhunterslogo.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <img src={Logo} alt="travel-hunters-logo" />
      <button onClick={toggleMenu}>List my property</button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li><a href="/">Sign Up</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar