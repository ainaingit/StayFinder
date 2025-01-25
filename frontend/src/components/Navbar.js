import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link de react-router-dom

function Navbar() {
  const handleLoginClick = () => {
    // Optionnel: logiques supplémentaires ici si vous voulez gérer l'état ou vérifier une session
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">StayFinder</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="text-white hover:text-indigo-300">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/addproperties" className="text-white hover:text-indigo-300">Add</Link>
            </li>
            {/* Le bouton Login redirige vers /login */}
            <li className="nav-item">
              <Link to="/login" className="btn btn-primary nav-link">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
