import React from 'react';
import { connect } from 'react-redux'
import './favorite-catalog.css';
import {FilmDeleteFromFavorit} from '../../actions/index';
const FavoriteCatalog = ({items ,onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, title, IMDb, year } = item;
    return(
        <tr key={id}>
          <td>{idx+1}</td>
          <td>{title}</td>
          <td>{IMDb}</td>
          <td>{year}</td>
          <td>
            <button 
              onClick={()=> onDelete(id)}
              className="btn btn-outline-danger btn-sm float-left">
              <i className="fa fa-minus" />
            </button>
           </td>
          </tr>
      );
    };
  return (
    <div className="favorite-catalog">
      <h2>Your Liked</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Film</th>
            <th>IMDb</th>
            <th>Released</th>
            <th>Action</th>
          </tr>
        </thead>

          <tbody>
          { items.map(renderRow)  }
          </tbody>
        </table>
  
    </div>
  );
};
const mapStateToProps = ({catalogItems}) =>{
  return {
    items: catalogItems
  };
};
const mapDispatchToProps ={
    onDelete: FilmDeleteFromFavorit
    };



export default connect ( mapStateToProps,mapDispatchToProps)(FavoriteCatalog);
