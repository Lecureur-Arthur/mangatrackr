const request = require('supertest');
const express = require('express');
const app = express();

// Importe et utilise ta route comme dans server.js
const mangasRoutes = require('../backend/routes/mangas');
app.use('/api/mangas', mangasRoutes);

describe('GET /api/mangas', () => {
  it('should return a list of mangas', async () => {
    const res = await request(app).get('/api/mangas');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

    // Vérifie qu'il y a au moins un manga et qu'il a un champ titre
    if (res.body.length > 0) {
        expect(res.body[0]).toHaveProperty('id');
        expect(res.body[1]).toHaveProperty('title');
        expect(res.body[2]).toHaveProperty('author');
    }
  });
});
