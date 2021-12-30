import React from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  return(
    <nav className='nav-cont'>
      <em>&lt;  ANA & STEVEN BULL &#47;&gt;</em>
      <div className='route-cont'>
        <span onClick={() => navigate('/')}>Home</span>
        <span onClick={() => navigate('/rsvp')}>RSVP</span>
        <span onClick={() => navigate('/registry')}>Registry</span>
      </div>
    </nav>
  )
}

export default Nav;