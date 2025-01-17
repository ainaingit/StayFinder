import React from 'react';

function Card(property) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={property.image} alt={property.name} className="w-full h-56 object-cover"/>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{property.name}</h2>
        <p className="text-gray-500">{property.location}</p>
        <p className="text-gray-700 mt-2">${property.price} / night</p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">View Details</button>
      </div>
    </div>
  );
}

export default Card;
