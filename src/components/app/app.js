import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage } from '../pages';
import ItemDetailsContainer from '../item-details';
import ItemListContainer from '../item-list';

import './app.css';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader />
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact />
        <Route path="/pokemon/:name"
          render={({ match }) => {
            const { name } = match.params;
            return <ItemDetailsContainer pokemon={name} />
          }} exact />
        <Route path="/pokemons/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <ItemListContainer pageRouterSelected={Number(id-1)} />
          }} exact />
      </Switch>
    </main>
  );
};



export default App;
