import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import { HomePage, PokemonPage, PokemonList  } from '../pages';


import './app.css';

const App = () => {
  return (
    <main role="main" className="container">
      <Header />
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact />
        <Route path="/pokemon/:name"
          render={({ match }) => {
            const { name } = match.params;
            return <PokemonPage pokemon={name} />
          }} exact />
        <Route path="/pokemons/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <PokemonList pageRouterSelected={Number(id-1)} />
          }} exact />
      </Switch>
    </main>
  );
};



export default App;
