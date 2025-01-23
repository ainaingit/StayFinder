const { MongoClient } = require('mongodb');

// Charger la configuration depuis .env
// load config from .env file
require('dotenv').config();

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let db;

async function connectToDatabase() {
  if (!db) {
    try {
      await client.connect();
      console.log('Connected to MongoDB');
      db = client.db('stayfinder'); // Remplace par le nom de ta base
    } catch (err) {
      console.error('Failed to connect to MongoDB:', err);
    }
  }
  return db;
}

module.exports = connectToDatabase;
