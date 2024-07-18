import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/pb_white 1.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleScrollLink = (to) => {
    const offset = -250; // Adjust this value based on your navbar height
    const scrollWithOffset = (element) => {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    };

    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) {
          scrollWithOffset(element);
        }
      }, 100);
    } else {
      const element = document.getElementById(to);
      if (element) {
        scrollWithOffset(element);
      }
    }
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        
        <li>
          <span onClick={() => handleScrollLink('program')}>Program</span>
        </li>
        <li>
          <RouterLink to="/instructor">Instructor</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About us</RouterLink>
        </li>
        <li>
          <span onClick={() => handleScrollLink('campus')}>Campus</span>
        </li>
        <li>
          <span onClick={() => handleScrollLink('testimonials')}>Testimonials</span>
        </li>
        <li>
          <span onClick={() => handleScrollLink('contact')} className='btn'>Contact us</span>
        </li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
