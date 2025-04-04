const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Pour servir les fichiers statiques comme index.html, styles.css, app.js, etc.
app.use(express.static(path.join(__dirname, '../frontend')));

// Route API (par exemple pour les mangas)
const mangasRouter = require('./routes/mangas');
app.use('/api/mangas', mangasRouter);

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré à http://localhost:${port}`);
});
