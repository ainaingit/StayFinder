// backend/server.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// Importer le contrôleur des propriétés
const propertiesController = require('./controllers/propertiesController');
const userController = require('./controllers/usercontroller');

// Middleware pour parser le JSON et les données encodées
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware pour afficher les logs des requêtes
app.use(morgan('dev'));

// Middleware CORS pour permettre au frontend de communiquer avec l'API
app.use(cors());

// Utiliser les routes du contrôleur des propriétés
app.use('/api', propertiesController);
app.use('/api', userController);

// Middleware pour gérer les erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Démarrer le serveur sur le port spécifié dans .env ou par défaut 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
