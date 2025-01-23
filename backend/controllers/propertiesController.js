// backend/controllers/propertiesController.js
const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db');

// Récupérer toutes les propriétés
router.get('/properties', async (req, res) => {
    try {
      const db = await connectToDatabase();
      const properties = await db.collection('properties').find().toArray();
      if (properties.length === 0) {
        console.log("Aucune propriété trouvée.");
        }   
      res.json(properties);
    } catch (err) {
      console.error('Error retrieving properties:', err);
      res.status(500).json({ error: 'Failed to retrieve properties' });
    }
  });
  
  // Ajouter une propriété
  router.post('/properties', async (req, res) => {
    try {
      const db = await connectToDatabase();
      const result = await db.collection('proprietes').insertOne(req.body);
      res.status(201).json(result.ops[0]); // Renvoie la propriété ajoutée
    } catch (err) {
      console.error('Error adding property:', err);
      res.status(500).json({ error: 'Failed to add property' });
    }
  });
  
  module.exports = router;
