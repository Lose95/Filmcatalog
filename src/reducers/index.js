const initialState = {
    films: [],
    loading: true,
    error: null,
    catalogItems: []
};

const reducer = (state = initialState, action) =>{
   

    switch (action.type){
        
        case 'FILM_REQUESTED':
            return {
            catalogItems: state.catalogItems,
            books: [],
            loading: true,
            error: null
            };
        case 'FILM_LOADED':
            return {
                catalogItems: state.catalogItems,
                films: action.payload, 
                loading: false,
                error: null
            };
        case 'FILM_ADDED_TO_FAVORITE':
            const filmId = action.payload;
            const film = state.films.find((film)=>film.id === filmId )
            const itemIndex = state.catalogItems.findIndex(({id})=> id === filmId);
            const item = state.catalogItems[itemIndex];
            let newItem;  
            if (item){
                newItem ={ ...item}
                }
                else{
                    newItem = {
                        id: filmId,
                        title: film.title,
                        IMDb: film.IMDb,
                        year: film.year
                    };
                    
                }
                if (item <0 ){ 
                    return{
                        ...state,
                        catalogItems: [
                            ...state.catalogItems,
                            newItem
                ]
                    };
                }
                else{
                    return{
                        ...state,
                        catalogItems: [
                            ...state.catalogItems.slice(0, itemIndex),
                            newItem,
                            ...state.catalogItems.slice(itemIndex+1)
                        ]
                    };
                };
        case 'FILM_DELETE_FROM_FAVORITE':
                const currIndex = state.catalogItems.findIndex(({id})=> id === action.payload);      
                    return{
                    
                        ...state,
                            catalogItems: [
                                ...state.catalogItems.slice(0, currIndex),
                                ...state.catalogItems.slice(currIndex+1)]

            };
                
        case 'FILM_ERROR':
            return {
                catalogItems: state.catalogItems,
                films: [], 
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};
export default reducer;