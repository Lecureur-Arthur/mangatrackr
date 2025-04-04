const express = require('express');
const router = express.Router();

// Exemple de données
const mangas = [
    { 
        id: 1, 
        title: "One Piece", 
        author: "Eiichiro Oda", 
        synopsis: "Luffy et son équipage partent à la recherche du One Piece pour devenir le roi des pirates.", 
        coverImage: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/1a/Logo_One_piece.svg/langfr-1920px-Logo_One_piece.svg.png"
    },
    { 
        id: 2, 
        title: "Sexy Cosplay Doll", 
        author: "Shinichi Fukuda", 
        synopsis: "Une lycéenne passionnée de cosplay se lie d'amitié avec un camarade talentueux en couture.", 
        coverImage: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/22/Sexy_Cosplay_Doll_Logo.png/330px-Sexy_Cosplay_Doll_Logo.png" 
    },
    { 
        id: 3, 
        title: "Shikimori n'est pas juste mignonne", 
        author: "Keigo Maki", 
        synopsis: "Shikimori est une petite amie parfaite, mais elle peut aussi être incroyablement cool.", 
        coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Kawaii_dake_ja_Nai_Shikimori-san_logo.png/250px-Kawaii_dake_ja_Nai_Shikimori-san_logo.png" 
    },
    { 
        id: 4, 
        title: "Demon Slayer", 
        author: "Koyoharu Gotouge", 
        synopsis: "Tanjiro Kamado devient un pourfendeur de démons pour venger sa famille et sauver sa sœur.", 
        coverImage: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/23/Demon_Slayer_Logo_international.png/250px-Demon_Slayer_Logo_international.png" 
    },
    { 
        id: 5, 
        title: "Horimiya", 
        author: "HERO", 
        synopsis: "Une romance douce entre deux lycéens qui cachent leur véritable personnalité.", 
        coverImage: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/9a/Hori-san_to_Miyamura-kun_Logo.png/220px-Hori-san_to_Miyamura-kun_Logo.png" 
    },
    { 
        id: 6, 
        title: "The Quintessential Quintuplets", 
        author: "Negi Haruba", 
        synopsis: "Un étudiant devient le tuteur de cinq sœurs jumelles aux personnalités uniques.", 
        coverImage: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/ba/The_Quintessential_Quintuplets_Logo.png/330px-The_Quintessential_Quintuplets_Logo.png" 
    },
    { 
        id: 7, 
        title: "Jujutsu Kaisen", 
        author: "Gege Akutami", 
        synopsis: "Yuji Itadori rejoint une école d'exorcisme pour combattre des malédictions dangereuses.", 
        coverImage: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4d/Jujutsu_kaisen_logo_fr.png/220px-Jujutsu_kaisen_logo_fr.png" 
    },
];

// Route pour obtenir la liste des mangas
router.get('/', (req, res) => {
  res.json(mangas);
});

module.exports = router;
