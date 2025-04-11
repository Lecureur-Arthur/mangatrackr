const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // utile si le frontend est sur un autre port

// Route API
const mangasRouter = require('./routes/mangas');
app.use('/api/mangas', mangasRouter);

app.listen(port, () => {
  console.log(`Serveur backend en ligne sur http://localhost:${port}`);
});
