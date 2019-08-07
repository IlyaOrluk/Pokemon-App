import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import { HomePage, PokemonPage, PokemonList, PokemonSearch, PokemonMiniGame  } from '../pages';


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
          render={({ match, history }) => {
            const { name } = match.params;
            return <PokemonPage pokemon={name} back={history.goBack}/>
          }} exact />
        <Route path="/pokemons/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <PokemonList pageRouterSelected={Number(id-1)} />
          }} exact />
          <Route path="/searchpokemon/"
          component={PokemonSearch} exact />
          <Route path="/minigame/"
          component={PokemonMiniGame} exact />
      </Switch>
      <Footer/>
    </main>
  );
};



export default App;
