// src/Card.js
import React from 'react';
import { Link } from 'react-router-dom';

function Card({ property }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={property.image} className="card-img-top" alt={property.name} />
      <div className="card-body">
        <h5 className="card-title">{property.name}</h5>
        <p className="card-text">{property.location}</p>
        <p> identifiant du bien : {property.id}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-muted">${property.price}/night</span>
          <Link to={`/property/${property.id}`} className="btn btn-primary">
            Voir
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
