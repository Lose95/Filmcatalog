const filmsLoaded = (newFilms) => {
    return{
        type: 'FILM_LOADED',
        payload: newFilms
    };
};
const filmsReqested = () => {
    return {
        type: 'FILM_REQUESTED'
    }
}
const filmsError = (error) => {
    return{
        type:'FILM_ERROR',
        payload: error
    }
};

export const filmAddedToFavorite =(filmId) =>{
    return{
        type:'FILM_ADDED_TO_FAVORITE',
        payload: filmId
    };
};
export const FilmDeleteFromFavorit = (filmId) => {
    return {
      type:'FILM_DELETE_FROM_FAVORITE',
      payload: filmId
    };
  };
const fetchFilms = (filmcatalogService, dispatch) => () => {
    dispatch(filmsReqested());
    filmcatalogService.getFilms()
      .then((data) => dispatch(filmsLoaded(data)))
      .catch((err) => dispatch(filmsError(err)));
 }
export {fetchFilms};