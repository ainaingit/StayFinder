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

  router.post('/addpropertie', async (req, res) => {
    try {
      console.log('Requête reçue:', req.body);  // Affiche la requête reçue pour vérification
  
      const db = await connectToDatabase();
      console.log("Connexion à la base de données réussie.");
  
      const result = await db.collection('properties').insertOne(req.body);
      console.log("Résultat de l'insertion:", result);
  
      if (result && result.insertedId) {
        res.status(201).json({ id: result.insertedId });
      } else {
        res.status(500).json({ error: 'No document was inserted' });
      }
    } catch (err) {
      console.error('Erreur lors de l\'ajout de la propriété:', err);
      res.status(500).json({ error: 'Failed to add property', details: err.message });
    }
  });
  
  
  module.exports = router;
