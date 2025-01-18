import React from 'react';
import { useParams } from 'react-router-dom';  // Pour récupérer l'id de la propriété depuis l'URL

const DetailsProperty = ({ properties }) => {
  const { id } = useParams();  // Récupère l'id de la propriété dans l'URL
  const property = properties.find(p => p.id === id);  // Trouve la propriété correspondante

  if (!property) {
    return <div>Property not found!</div>;
  }

  return (
    <div className="container mt-5">
      <h2>{property.name}</h2>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Price:</strong> ${property.price} per night</p>
      <div>
        <h4>Description:</h4>
        <p>{property.description}</p>
      </div>
      <div>
        <h4>Photos:</h4>
        <div className="row">
          {property.images.map((image, index) => (
            <div key={index} className="col-md-4 mb-3">
              <img src={image} alt={`Property ${index + 1}`} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailsProperty;
