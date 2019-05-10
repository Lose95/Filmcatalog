import React from 'react';
import './catalog-header.css';

const CatalogHeader = ({ numItems, total }) => {
  return (
    <header className="catalog-header row">
      <a className="logo text-dark" href="#">Film Catalog</a>
      <a className="catalog-favorite">
      <i className="fas fa-film"></i>
        {numItems} items ({total})
      </a>
    </header>
  );
};
export default CatalogHeader;
