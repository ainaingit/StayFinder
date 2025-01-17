import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  const properties = [
    {
      name: 'Cozy Apartment in Paris',
      location: 'Paris, France',
      price: 120,
      image: 'https://example.com/image1.jpg',
    },
    {
      name: 'Modern Loft in New York',
      location: 'New York, USA',
      price: 250,
      image: 'https://example.com/image2.jpg',
    }
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-6">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <Card key={index} property={property} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
