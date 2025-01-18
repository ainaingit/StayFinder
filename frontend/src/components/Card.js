import React from 'react';

function Card({ property }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={property.image} className="card-img-top" alt={property.name} />
      <div className="card-body">
        <h5 className="card-title">{property.name}</h5>
        <p className="card-text">{property.location}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-muted">${property.price}/night</span>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
