// backend/controllers/propertiesController.js
const express = require('express');
const router = express.Router();

// Liste des propriétés
const properties = [
  {
      id: 1,
      name: "Appartement Cosy à Antananarivo",
      location: "Antananarivo, Madagascar",
      price: 120,
      image: "https://example.com/image1.jpg",
      latitude: -18.8792,
      longitude: 47.5079
  },
  {
      id: 2,
      name: "Loft Moderne à Nosy Be",
      location: "Nosy Be, Madagascar",
      price: 250,
      image: "https://example.com/image2.jpg",
      latitude: -13.3306,
      longitude: 48.2736
  },
  {
      id: 3,
      name: "Villa de Luxe à Toamasina",
      location: "Toamasina, Madagascar",
      price: 450,
      image: "https://example.com/image3.jpg",
      latitude: -18.1416,
      longitude: 49.4020
  },
  {
      id: 4,
      name: "Condo en bord de mer à Mahajanga",
      location: "Mahajanga, Madagascar",
      price: 300,
      image: "https://example.com/image4.jpg",
      latitude: -15.7271,
      longitude: 46.3257
  },
  {
      id: 5,
      name: "Appartement spacieux à Antsirabe",
      location: "Antsirabe, Madagascar",
      price: 200,
      image: "https://example.com/image5.jpg",
      latitude: -19.8667,
      longitude: 47.0333
  },
  {
      id: 6,
      name: "Penthouse à Fianarantsoa",
      location: "Fianarantsoa, Madagascar",
      price: 600,
      image: "https://example.com/image6.jpg",
      latitude: -21.4531,
      longitude: 47.0853
  },
  {
      id: 7,
      name: "Cottage charmant à Ambalavao",
      location: "Ambalavao, Madagascar",
      price: 150,
      image: "https://example.com/image7.jpg",
      latitude: -21.8236,
      longitude: 47.5167
  },
  {
      id: 8,
      name: "Studio moderne à Toliara",
      location: "Toliara, Madagascar",
      price: 220,
      image: "https://example.com/image8.jpg",
      latitude: -23.3492,
      longitude: 43.6667
  },
  {
      id: 9,
      name: "Maison de campagne à Mahitsy",
      location: "Mahitsy, Madagascar",
      price: 350,
      image: "https://example.com/image9.jpg",
      latitude: -18.5667,
      longitude: 47.0167
  },
  {
      id: 10,
      name: "Cabane au bord du lac à Diego Suarez",
      location: "Diego Suarez, Madagascar",
      price: 400,
      image: "https://example.com/image10.jpg",
      latitude: -12.3600,
      longitude: 49.0020
  }
];

// Route pour obtenir les propriétés
router.get('/properties', (req, res) => {
  res.json(properties);
});

module.exports = router;
