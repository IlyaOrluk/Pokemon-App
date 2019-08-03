import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className='header-logo'>
        <Link to="/#"><img src={logo} alt='logo'></img></Link>
        <span className='header-title'>expid-info</span>
      </div>
    </header>
  );
};



export default Header;
