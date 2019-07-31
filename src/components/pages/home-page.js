import React from 'react';
import { Link } from 'react-router-dom';

import './home-page.css';

const HomePage = () => {
  return (

    <Link to="/pokemons/1/">
      <div className='home-page'>
      <span className='browse-poke-link'>Browse</span>
      </div>
      </Link >

  );
};

export default HomePage;
