// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();

// Importer le contrôleur des propriétés
const propertiesController = require('./controllers/propertiesController');

// Middleware CORS pour permettre à React d'accéder à l'API backend
app.use(cors());

// Utiliser les routes du contrôleur des propriétés
app.use('/api', propertiesController);

// Démarrer le serveur sur le port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
