import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.png';

const Header = () => {
  return (
    <header className="header row">
      <Link to="/#"><img className='header-logo' src={logo} alt='logo'></img></Link>
    </header>
  );
};



export default Header;
