const filmsLoaded = (newFilms) => {
    return{
        type: 'FILM_LOADED',
        payload: newFilms
    };
};
export {
    filmsLoaded
};