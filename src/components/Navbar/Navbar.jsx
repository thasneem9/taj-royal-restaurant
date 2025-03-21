import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images.js'
import './Navbar.css'
import { useState } from 'react';
import Booking from '../Booking/Booking.jsx';

const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  return (
<nav className='navbar'>
      <div className='navbar-logo'>
        <img src={images.tajroyal}/>
      </div>

      <ul className='navbar-links'>
        <li className='p__opensans' ><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>

      <div className='navbar-login'>
      <a href="#booktable"  className='p__opensans' onClick={() => setIsBookingOpen(true)}>Book Table</a> 

       <div/>
       <a href="#login"  className='p__opensans'>Login / Register</a>

     
      </div>

      <div  className="navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=>setToggleMenu(true)}/>
        {toggleMenu &&(
          <div className="navbar-smallscreen-overlay slide-bottom flex__center">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=>setToggleMenu(false)}/>
          <ul className='navbar-smallscreen-links '>
            <li className='p__opensans'><a href="#home">Home</a></li>
            <li className='p__opensans'><a href="#about">About</a></li>
            <li className='p__opensans'><a href="#menu">Menu</a></li>
            <li className='p__opensans'><a href="#awards">Awards</a></li>
            <li className='p__opensans'><a href="#contact">Contact</a></li>
          </ul>
        </div>
        )}
        
      </div>
      {isBookingOpen && <Booking closePopup={() => setIsBookingOpen(false)} />}

</nav>
)
};

export default Navbar;
