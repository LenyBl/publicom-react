// backend/index.js
// eslint-disable-next-line no-undef
const express = require('express');
const app = express();
const port = 3001;
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

// Middleware pour parser le corps des requêtes
app.use(express.json());
app.use(cors());
app.use('/api', userRoutes);

// Route de test
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});


