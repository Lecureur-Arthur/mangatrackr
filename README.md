# MangaTrackr

**MangaTrackr** est une application web simple permettant d'afficher et de gérer une collection de mangas. Elle repose sur une architecture en deux parties : un backend (API Node.js) et un frontend (HTML/CSS/JS), conteneurisés à l’aide de Docker.

> ⚠️ **L'application ne fonctionne actuellement que sur la branche `feature/front`.**  
> ⚠️ **Le serveur Nginx n’est pas encore intégré. Le projet ne peut donc pas fonctionner correctement en production.**

---

## Prérequis

Avant de lancer l'application, assurez-vous d'avoir :

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/)

---

## Structure du projet

```bash
/MangaTrackr
│
├── backend/                # Contient le backend de l'application (API)
│   ├── server.js           # Code principal de l'API
│   ├── package.json        # Dépendances du backend
│   ├── package-lock.json   # Lockfile des dépendances
│   ├── Dockerfile          # Dockerfile pour le backend
│   └── routes/
│       └── mangas.js       # Route API pour obtenir des informations sur quelques mangas
│
├── frontend/               # Contient le frontend (interface utilisateur)
│   ├── Dockerfile          # Dockerfile pour le frontend
│   ├── index.html          # Page principale HTML
│   ├── app.js              # Logique JS de l'interface
│   └── styles.css          # Feuille de style CSS
│
├── test/                   # Contient les tests
│   └── mangas.test.js      # Test unitaire pour l'API mangas
│
└── docker-compose.yml      # Fichier Docker Compose
```

---

## Lancer l'application

> L’application est **uniquement fonctionnelle sur la branche `feature/front`**. Assurez-vous de vous positionner dessus avant de commencer :

```bash
git checkout feature/front
```

### 1. Cloner le projet

```bash
git clone <URL_DU_REPOSITORY>
cd MangaTrackr
```

### 2. Construire et lancer les conteneurs

```bash
docker-compose up --build
```

Cela créera deux conteneurs :
- Un conteneur pour le **backend Node.js** (port `3000`)
- Un conteneur pour le **frontend** (port `80`)

⚠️ Sans serveur **Nginx**, les appels entre le frontend et le backend peuvent échouer selon votre configuration. Il est prévu d'ajouter Nginx pour gérer le routage et les redirections dans une future version.

### 3. Accéder à l’application

- **Frontend** (interface utilisateur) :  
  [http://localhost](http://localhost)

- **Backend (API)** :  
  [http://localhost:3000/api/mangas](http://localhost:3000/api/mangas)

---

## Lancer les tests

Les tests sont situés dans le dossier `test/` et utilisent un framework comme `mocha` ou `jest` (à configurer si ce n’est pas encore fait).

```bash
npm install
npm test
```

---

## Mode développement (sans Docker)

### Backend

```bash
cd backend
npm install
node server.js
```

### Frontend

Vous pouvez ouvrir `index.html` dans votre navigateur ou utiliser un serveur local (`live-server`, `http-server`, etc.) :

```bash
npx live-server
```

---

## Prochaines améliorations

- Ajout du serveur **Nginx** pour gérer les appels entre les services
- Ajout d’une base de données persistante
- Intégration continue avec des tests automatisés
- Authentification utilisateur

---

## Dépendances principales

### Backend

- Express.js
- Node.js

### Frontend

- HTML/CSS/JS Vanilla
