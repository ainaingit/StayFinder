// backend/controllers/
const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db');

// Récupérer toutes les propriétés
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const db = await connectToDatabase();
      // Modifier la requête pour ne sélectionner que l'_id
      const user = await db.collection('user').find({ firstName: email, password: password }).project({ _id: 1 }).toArray();
      
      if (user.length === 0) {
        console.log("Aucun utilisateur trouvé.");
        return res.status(404).json({ message: "Aucun utilisateur trouvé avec cet email et mot de passe." });
      }
  
      // Retourner uniquement l'_id de l'utilisateur
      res.json(user[0]);  // On retourne uniquement le premier utilisateur trouvé (s'il y en a un)
    } catch (err) {
      console.error('Erreur lors de la récupération de l’utilisateur:', err);
      res.status(500).json({ error: 'Échec de la récupération de l’utilisateur' });
    }
  });
  
  module.exports = router;

