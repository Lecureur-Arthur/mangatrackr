# Utilise une image Node officielle
FROM node:18

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers nécessaires
COPY package*.json ./
COPY backend/ ./backend/

# Installe les dépendances
RUN npm install

# Copie les autres fichiers nécessaires
COPY . .

# Expose le port utilisé par le serveur
EXPOSE 3000

# Commande pour démarrer le backend
CMD ["node", "backend/server.js"]
