import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsProperty = ({ properties }) => {
  // Récupère l'ID de la propriété depuis l'URL
  const { id } = useParams();

  // Recherche la propriété correspondant à cet ID
  const property = properties.find(p => p.id === parseInt(id));

  // Si aucune propriété n'est trouvée, afficher un message d'erreur
  if (!property) {
    return <div>Property not found!</div>;
  }

  // Vérification si la propriété a une seule image ou un tableau d'images
  const images = Array.isArray(property.image) ? property.image : [property.image];

  return (
    <div className="container mt-5">
      <h2>{property.name}</h2>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Price:</strong> ${property.price}</p>

      {/* Affichage de la description si elle existe */}
      {property.description && (
        <div>
          <h4>Description:</h4>
          <p>{property.description}</p>
        </div>
      )}

      <div>
        <h4>Photos:</h4>
        <div className="row">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className="col-md-4 mb-3">
                <img src={image} alt={`Property ${index + 1}`} className="img-fluid" />
              </div>
            ))
          ) : (
            <p>No images available.</p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <h4>Other Information</h4>
        <ul>
          <li><strong>ID:</strong> {property.id}</li>
          <li><strong>Location:</strong> {property.location}</li>
          <li><strong>Price per night:</strong> ${property.price}</li>
        </ul>
      </div>
    </div>
  );
};

export default DetailsProperty;
