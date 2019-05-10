import React from 'react';
import './app.css';
import { Route, Switch } from 'react-router-dom'
import { FavoritePage, HomePage } from '../pages';
const App = () => {
      return (
        <main role="main" className="container">
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
