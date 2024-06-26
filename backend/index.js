// backend/index.js
// eslint-disable-next-line no-undef
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

// Middleware pour parser le corps des requêtes
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use('/api', userRoutes);

// Route de test
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});


