import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'

import App from './components/app';
import ErrorBoundry from './components/erorr-boundry';
import FilmCatalogService from './services/film-services';
import {FilmServiceProvider} from './components/filmcatalog-service-context';

import store from './store'

const filmcatalogService = new FilmCatalogService();

ReactDOM.render(
 <Provider store={store}>
    <ErrorBoundry>
        <FilmServiceProvider value={filmcatalogService}>
            <Router>
                <App /> 
            </Router>
        </FilmServiceProvider>
    </ErrorBoundry>
 </Provider>, 
 document.getElementById('root')
);
