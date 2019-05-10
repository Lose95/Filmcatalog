import React from 'react';
import { FilmServiceConsumer } from '../filmcatalog-service-context';

const withFilmcatalogService = () => (Wrapped) => {

  return (props) => {
    return (
      <FilmServiceConsumer>
        {
          (filmcatalogService) => {
            return (<Wrapped {...props}
              filmcatalogService={filmcatalogService}/>);
          }
        }
      </FilmServiceConsumer>
    );
  }
};

export default withFilmcatalogService;
