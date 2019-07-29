import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ShopHeader = () => {
  return (
    <header className="shop-header row">
      <Link className="logo" to="/#">PokeAPI</Link>
      <Link className="logo" to="/pokemons/1/">Browse Poke</Link>
    </header>
  );
};



export default connect()(ShopHeader);
