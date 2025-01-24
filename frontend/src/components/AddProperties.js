import React, { useState } from 'react';
import API_URL from '../config';  // Importer l'URL de l'API

const AddProperties = () => {
  const [property, setProperty] = useState({
    id: "",
    name: "",
    location: "",
    price: "",
    image: "",
    latitude: "",
    longitude: "",
    guests_capacity: "",
    adults_capacity: "",
    children_capacity: "",
    bedrooms: "",
    bathrooms: "",
    type: "",
    amenities: "",  // La liste des équipements sera gérée sous forme de texte séparé par des virgules
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevProperty) => ({
      ...prevProperty,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!property.name || !property.location || !property.price || !property.latitude || !property.longitude || 
        !property.guests_capacity || !property.adults_capacity || !property.children_capacity || !property.bedrooms || !property.bathrooms || !property.type) {
      setMessage("Tous les champs doivent être remplis.");
      return;
    }

    try {
      // Transformation de la liste d'équipements en tableau
      const amenitiesList = property.amenities.split(',').map(item => item.trim());
      
      const propertyData = {
        ...property,
        amenities: amenitiesList,
      };

      const response = await fetch(`${API_URL}/addpropertie`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(propertyData),
      });

      if (response.ok) {
        setMessage("Propriété ajoutée avec succès !");
        alert("Propriété ajoutée avec succès !");
        setProperty({
          id: "",
          name: "",
          location: "",
          price: "",
          image: "",
          latitude: "",
          longitude: "",
          guests_capacity: "",
          adults_capacity: "",
          children_capacity: "",
          bedrooms: "",
          bathrooms: "",
          type: "",
          amenities: "",
        });
      } else {
        setMessage("Une erreur s'est produite lors de l'ajout de la propriété.");
      }
    } catch (error) {
      setMessage("Erreur de connexion à l'API.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Ajouter une nouvelle propriété</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom de la propriété</label>
          <input type="text" className="form-control" id="name" name="name" value={property.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Localisation</label>
          <input type="text" className="form-control" id="location" name="location" value={property.location} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Prix</label>
          <input type="number" className="form-control" id="price" name="price" value={property.price} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">URL de l'image</label>
          <input type="url" className="form-control" id="image" name="image" value={property.image} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="latitude" className="form-label">Latitude</label>
          <input type="number" step="any" className="form-control" id="latitude" name="latitude" value={property.latitude} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="longitude" className="form-label">Longitude</label>
          <input type="number" step="any" className="form-control" id="longitude" name="longitude" value={property.longitude} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="guests_capacity" className="form-label">Capacité totale (invités)</label>
          <input type="number" className="form-control" id="guests_capacity" name="guests_capacity" value={property.guests_capacity} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="adults_capacity" className="form-label">Capacité (adultes)</label>
          <input type="number" className="form-control" id="adults_capacity" name="adults_capacity" value={property.adults_capacity} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="children_capacity" className="form-label">Capacité (enfants)</label>
          <input type="number" className="form-control" id="children_capacity" name="children_capacity" value={property.children_capacity} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="bedrooms" className="form-label">Chambres</label>
          <input type="number" className="form-control" id="bedrooms" name="bedrooms" value={property.bedrooms} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="bathrooms" className="form-label">Salles de bain</label>
          <input type="number" className="form-control" id="bathrooms" name="bathrooms" value={property.bathrooms} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type de propriété</label>
          <input type="text" className="form-control" id="type" name="type" value={property.type} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="amenities" className="form-label">Équipements (séparés par des virgules)</label>
          <input type="text" className="form-control" id="amenities" name="amenities" value={property.amenities} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
};

export default AddProperties;
