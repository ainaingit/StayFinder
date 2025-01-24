import React from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const DetailsProperty = ({ properties }) => {
  const { id } = useParams();

  const property = properties.find(p => p._id === id);

  if (!property) {
    return <div>Property not found!</div>;
  }

  const images = Array.isArray(property.image) ? property.image : [property.image];

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Colonne gauche : Détails de la propriété */}
        <div className="col-md-8">
          <h2>{property.name}</h2>
          <p><strong>Location:</strong> {property.location}</p>
          <p><strong>Price:</strong> ${property.price}</p>
          <p><strong>Type:</strong> {property.type}</p> {/* Affichage du type */}
          
          {property.description && (
            <div>
              <h4>Description:</h4>
              <p>{property.description}</p>
            </div>
          )}

          {/* Affichage des amenities */}
          {property.amenities && property.amenities.length > 0 && (
            <div>
              <h4>Amenities:</h4>
              <ul>
                {property.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
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

          <div>
            <h4>Additional Information:</h4>
            <ul>
              <li><strong>ID:</strong> {property.id}</li>
              <li><strong>Location:</strong> {property.location}</li>
              <li><strong>Price per night:</strong> ${property.price}</li>
              <li><strong>Latitude:</strong> {property.latitude}</li>
              <li><strong>Longitude:</strong> {property.longitude}</li>
              <li><strong>Image URL:</strong> {property.image}</li>
            </ul>
          </div>

          {/* Bouton de réservation */}
          <div className="mt-4">
            <button className="btn btn-danger w-100">Book Now</button>
          </div>
        </div>

        {/* Colonne droite : Carte */}
        <div className="col-md-4">
          <h4>Location Map</h4>
          <div style={{ height: '300px' }}>
            <MapContainer
              center={[property.latitude, property.longitude]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[property.latitude, property.longitude]}>
                <Popup>{property.name}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProperty;
