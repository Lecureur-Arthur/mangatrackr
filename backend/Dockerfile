<<<<<<< HEAD
# Utilise une image Node officielle
FROM node:18

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers nécessaires
COPY package*.json ./
COPY backend/ ./backend/
=======
FROM node:18

WORKDIR /app

# Copie les fichiers package.json et package-lock.json en premier
COPY package*.json ./
>>>>>>> feature/front

# Installe les dépendances
RUN npm install

<<<<<<< HEAD
# Copie les autres fichiers nécessaires
COPY . .

# Expose le port utilisé par le serveur
EXPOSE 3000

# Commande pour démarrer le backend
CMD ["node", "backend/server.js"]
=======
# Copie tout le reste du code après
COPY . .

CMD ["npm", "start"]
>>>>>>> feature/front
