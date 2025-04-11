FROM node:18

WORKDIR /app

# Copie les fichiers package.json et package-lock.json en premier
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tout le reste du code après
COPY . .

CMD ["npm", "start"]
