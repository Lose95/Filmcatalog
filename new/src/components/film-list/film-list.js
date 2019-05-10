import React, { Component } from 'react';
import FilmListItem from '../film-list-item';
import './film-list.css'
import { connect } from 'react-redux';
import { withFilmcatalogService } from '../hoc'
import {filmsLoaded} from '../../actions';
import {compose} from '../../utils';

class FilmList extends Component {

  componentDidMount() {
    const { filmcatalogService } = this.props;
    const data = filmcatalogService.getFilms();

    
    this.props.filmsLoaded(data);
    
      
  }
      
  render() {
      const { films } = this.props;
      return (
        console.log(films),
       <ul className="film-list">
         {
            films.map((film) => {
              return (
                <li key={film.id}><FilmListItem film={film}/></li>
              )
              
            })
          }
      </ul>
      
      );
  }
}

const mapStateToProps = ({ films }) => {
  
    return { films };
};

const mapDispatchToProps = {
     filmsLoaded
 };

export default compose(
  withFilmcatalogService(),
  connect(mapStateToProps, mapDispatchToProps)
)(FilmList);

