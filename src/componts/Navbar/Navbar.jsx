import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/iitm_logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [navbarbg, setnavbarbg] = useState(false);
  const [mobileMenu, setmobileMenu] = useState(true);

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 50) {
        setnavbarbg(true);
      } else {
        setnavbarbg(false);
      }
    };
    window.addEventListener('scroll', handlescroll);
    return () => window.removeEventListener('scroll', handlescroll);
  }, []);

  const hidebar = () => {
    setmobileMenu(!mobileMenu);
  };

  return (
    <nav className='container' style={{background: navbarbg ? '#2563eb' : 'transparent',color:navbarbg?'white':'blue' 
       ,transition: '0.5s'
     }}>
      <img src={logo} alt="logo" className='logo' />
      <ul className={mobileMenu ? '' : 'mmenu-icon'}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/program">Program</NavLink></li>
        <li><NavLink to="/about">About us</NavLink></li>
        <li><NavLink to="/campus">Campus</NavLink></li>
        <li><NavLink to="/testimonials">Testimonials</NavLink></li>
        <li>
          <NavLink to="/contact">
            <button className='btn'>Contact us</button>
          </NavLink>
        </li>
      </ul>
      <img src={menu_icon} alt="menu" className='menu-icon' onClick={hidebar} />
    </nav>
  );
}

export default Navbar;