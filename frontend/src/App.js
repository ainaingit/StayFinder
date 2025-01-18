import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';  // Assure-toi d'importer Routes et Route
import properties from './assets/data'; // Import des propriétés depuis data.js
import DetailsProperty from './components/DetailsProperty';
import { Link } from 'react-router-dom'; // Importer Link de react-router-dom
function App() {
  

  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* Route principale (accueil) */}
        <Route
          path="/"
          element={
            <>
              {/* Section de recherche */}
              <div className="container mt-5">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search for properties..." />
                      <button className="btn btn-primary" type="button">Search</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section des propriétés */}
              <div className="container mt-5">
                <h2 className="text-center mb-4">Featured Properties</h2>
                <div className="row">
                  {properties.map((property, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                      <Card property={property} />                  
                    </div>
                  ))}
                </div>
              </div>
            </>
          }
        />

        {/* Route de contact */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
