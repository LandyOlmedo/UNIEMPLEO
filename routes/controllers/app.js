require('dotenv').config();

require('node:dns').setServers(['1.1.1.1', '1.0.0.1']);

const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error('No se encontró MONGODB_URI en el archivo .env');
  process.exit(1);
}

mongoose.connect(uri, {
  serverSelectionTimeoutMS: 5000,
})
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((error) => {
    console.error('Error al conectar con MongoDB:', error.message);
    process.exit(1);
  });
