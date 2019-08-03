import React from 'react';
import { Link } from 'react-router-dom';

import './home-page.css';

const HomePage = () => {
  return (
    <div className='home-page'>
      <Link to="/pokemons/1/">
        <div className='browse link-btn'>
          <span>Browse</span>
        </div>
      </Link >
      <Link to="/searchpokemon/">
        <div className='search link-btn'>
          <span>Search</span>
        </div>
      </Link >
      <Link to="/minigame/">
        <div className='mini-game link-btn'>
          <span>Mini Game</span>
        </div>
      </Link >
    </div>


  );
};

export default HomePage;
