import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <React.Fragment>
      <Link to="/pokemons/1/">Browse Poke</Link>
    </React.Fragment>
  );
};

export default HomePage;
