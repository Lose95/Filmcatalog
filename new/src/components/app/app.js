import React from 'react';
import './app.css';
import { Route, Switch } from 'react-router-dom'
import { FavoritePage, HomePage } from '../pages';
import CatalogHeader from "../catalog-header";
const App = () => {
      return (
        <main role="main" className="container">
        <CatalogHeader numItems={5} total={222}/>
        <Switch>
            <Route 
            path="/"
            component={HomePage}
            exact />
           
            <Route 
            path="/favorite"
            component={FavoritePage}
            />
        </Switch>
        </main>
      )
};
export default App;
