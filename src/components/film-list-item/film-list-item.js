import React from 'react'
import './film-list-item.css'

const FilmListItem = ({ film, onAddedToFavorite }) => {
       const { title, author, year, coverImage } = film;
       console.log(coverImage);
        return(
            <div className="film-list-item">
                <div className="film-cover">
                        <img src={coverImage} alt="cover"/>
                    <div className="film-details">
                        <span className="film-title">{title}</span>
                        <div className="film-author">{author}</div>
                        <div className="film-year">{year}</div>
                        <button 
                            onClick={onAddedToFavorite}
                            className="btn btn-info add-to-favorite">
                            Add to favorite
                        </button>
                    </div>
                </div>

            </div>
       )
};
export default FilmListItem;