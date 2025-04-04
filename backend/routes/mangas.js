const express = require('express');
const router = express.Router();

// Exemple de données
const mangas = [
    { id: 1, title: "One Piece", author: "Eiichiro Oda" },
    { id: 2, title: "Sexy Cosplay Doll", author: "Shinichi Fukuda" },
    { id: 3, title: "Shikimori n'est pas juste mignonne", author: "Keigo Maki" },
    { id: 4, title: "Demon Slayer", author: "Koyoharu Gotouge" },
    { id: 5, title: "Horimiya", author: "HERO" },
    { id: 6, title: "The Quintessential Quintuplets", author: "Negi Haruba" },
    { id: 7, title: "Jujutsu kaisen", author: "Gege Akutami" },
];

// Route pour obtenir la liste des mangas
router.get('/', (req, res) => {
  res.json(mangas);
});

module.exports = router;
