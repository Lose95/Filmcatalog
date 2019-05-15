import React, { Component } from 'react';
import FilmListItem from '../film-list-item';
import './film-list.css'
import { connect } from 'react-redux';
import { withFilmcatalogService } from '../hoc'
import { fetchFilms, filmAddedToFavorite } from '../../actions';
import {compose} from '../../utils';
import Spinner from '../spinner/spiner';
import ErrorIndicator from '../error-indicator/error-indicator';

const FilmList =({films, onAddedToFavorite}) =>{
  return (
    <ul className="film-list">
     {
        films.map((film) => {
          return (
            <li key={film.id}>
             <FilmListItem 
             film={film}
             onAddedToFavorite ={ ()=> onAddedToFavorite(film.id)}
             />
            </li>
          )
          
        })
      }
  </ul>
  
  );
}
class FilmListContainer extends Component {

  componentDidMount() {
    this.props.fetchFilms();
}
      
  render() {
      const { films, loading, error, onAddedToFavorite } = this.props;
      if (loading){
        return <Spinner />
      }
      if (error){
        return <ErrorIndicator />
      }
      return <FilmList films={films} onAddedToFavorite={onAddedToFavorite}/>;
 }
}

const mapStateToProps = ({ films, loading, error }) => {
  
    return { films, loading, error  };
};

const mapDispatchToProps = (dispatch, {filmcatalogService}) => {
     return {
       fetchFilms: fetchFilms(filmcatalogService, dispatch),
       onAddedToFavorite:(id) => dispatch(filmAddedToFavorite(id))
    }; 
 };
export default compose(
  withFilmcatalogService(),
  connect(mapStateToProps, mapDispatchToProps)
)(FilmListContainer);

