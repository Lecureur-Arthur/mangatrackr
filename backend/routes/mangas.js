const express = require('express');
const router = express.Router();

// Exemple de données
const mangas = [
    { id: 1, title: "One Piece", author: "Eiichiro Oda" },
    { id: 2, title: "Naruto", author: "Masashi Kishimoto" },
    { id: 3, title: "Attack on Titan", author: "Hajime Isayama" },
    { id: 4, title: "My Hero Academia", author: "Kohei Horikoshi" },
    { id: 5, title: "Demon Slayer", author: "Koyoharu Gotouge" },
    { id: 6, title: "Dragon Ball", author: "Akira Toriyama" },
    { id: 7, title: "Bleach", author: "Tite Kubo" },
    { id: 8, title: "Death Note", author: "Tsugumi Ohba" },
    { id: 9, title: "Fullmetal Alchemist", author: "Hiromu Arakawa" },
    { id: 10, title: "Hunter x Hunter", author: "Yoshihiro Togashi" },
    { id: 11, title: "Fairy Tail", author: "Hiro Mashima" },
    { id: 12, title: "Black Clover", author: "Yūki Tabata" },
    { id: 13, title: "Tokyo Ghoul", author: "Sui Ishida" },
    { id: 14, title: "Sword Art Online", author: "Reki Kawahara" },
    { id: 15, title: "JoJo's Bizarre Adventure", author: "Hirohiko Araki" },
    { id: 16, title: "The Seven Deadly Sins", author: "Nakaba Suzuki" },
    { id: 17, title: "Re:Zero", author: "Tappei Nagatsuki" },
    { id: 18, title: "Blue Exorcist", author: "Kazue Kato" },
    { id: 19, title: "Noragami", author: "Adachitoka" },
    { id: 20, title: "Vinland Saga", author: "Makoto Yukimura" },
    {id: 21, title: "Darling in the Franxx", author: "Naotaka Hayashi"},
    {id: 22, title: "Tokyo Revengers", author: "Ken Wakui"},
    {id: 23, title: "Jujutsu Kaisen", author: "Gege Akutami"},
    {id: 24, title: "Mob Psycho 100", author: "ONE"}
];

// Route pour obtenir la liste des mangas
router.get('/', (req, res) => {
  res.json(mangas);
});

module.exports = router;
