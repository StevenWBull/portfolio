import React, { useState } from 'react';
import './Nav.css';
import { useNavigate, Link } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const [ animateMenu, setAnimateMenu ] = useState(false)

  const animateHamburgerMenu = (ev) => {
    setAnimateMenu(!animateMenu);
  }

  return(
    <nav className='nav-cont'>
      <em>&lt;  ANA & STEVEN BULL &#47;&gt;</em>
      <div className='route-cont'>
        <span onClick={() => navigate('/')}>Home</span>
        <span onClick={() => navigate('/rsvp')}>RSVP</span>
        <span onClick={() => navigate('/registry')}>Registry</span>
      </div>
      <div className='user__logout'>
          <div className={ !animateMenu ? 'container' : 'container change'} onClick={animateHamburgerMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          { animateMenu &&
          <div className='dropdownContent'>
            <Link to='/' className='user_home_link' onClick={animateHamburgerMenu}>
              <span>Home</span>
            </Link>
            <Link to='/rsvp' className='logout_user_link' onClick={animateHamburgerMenu}>
              <span >RSVP</span>
            </Link>
            <Link to='/registry' className='logout_user_link' onClick={animateHamburgerMenu}>
              <span >Registry</span>
            </Link>
          </div>} 
      </div>
    </nav>
  )
}

export default Nav;