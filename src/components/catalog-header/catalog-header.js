import React from 'react';
import './catalog-header.css'; 
import { Link } from 'react-router-dom';

const CatalogHeader = ({ numItems, total }) => {
  return (
    <header className="catalog-header row">
      <Link to= "/"> 
        <div className="logo text-dark">Film Catalog</div>
      </Link> 
      <Link to= "/favorite">   
        <div className="catalog-favorite">
        <i className="like-icon fa fa-heart"></i>
          Liked Films ({total})
        </div>
      </Link> 
    </header>
  );
};
export default CatalogHeader;
