import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import DetailsProperty from './components/DetailsProperty';  // Importer le composant DetailsProperty
import AddProperties from './components/AddProperties';
import API_URL from './config'; // Importer la configuration de l'URL
import SearchBar from './components/searchbar';

function App() {
  // Créer un état pour stocker les propriétés
  const [properties, setProperties] = useState([]);


  // Fonction pour récupérer les propriétés depuis l'API
  const fetchProperties = async () => {
    try {
      const response = await fetch(`${API_URL}/properties`); // Utiliser l'URL centralisée
      const data = await response.json(); // Convertir la réponse en JSON
      setProperties(data); // Mettre à jour l'état avec les données récupérées
    } catch (error) {
      console.error('Erreur lors de la récupération des propriétés :', error);
    }
  };

  // Appeler la fonction fetchProperties au montage du composant
  useEffect(() => {
    fetchProperties();
  }, []);

  

  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* Route principale (accueil) */}
        <Route
          path="/"
          element={
            <>
             <SearchBar/>
      
      

              {/* Section des propriétés */}
              <div className="container mt-5">
                <h2 className="text-center mb-4">Featured Properties</h2>
                <div className="row">
                  {properties.length === 0 ? (
                    <p>Chargement des propriétés...</p> // Message de chargement si aucune propriété
                  ) : (
                    properties.map((property) => (
                      <div className="col-md-4 mb-4" key={property.id}>
                        <Card property={property} /> {/* Afficher chaque propriété dans une carte */}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </>
          }
        />

        {/* Route de contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Route dynamique pour les détails d'une propriété */}
        <Route
          path="/property/:id"  // Utilise l'id dans l'URL pour afficher les détails
          element={<DetailsProperty properties={properties} />}
        />
        
        {/* Route d'ajout de propriétés */}
        <Route path="/addproperties" element={<AddProperties />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
