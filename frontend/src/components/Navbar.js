import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">StayFinder</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white">Home</Link>
          </li>
          <li>
            <Link to="/properties" className="text-white">Properties</Link>
          </li>
          <li>
            <Link to="/profile" className="text-white">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
