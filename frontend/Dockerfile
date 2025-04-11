# Étape de build (optionnel si tu as un framework comme React/Vue)
FROM nginx:alpine

# Supprime le contenu par défaut de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copie les fichiers frontend dans nginx
COPY . /usr/share/nginx/html

# Expose le port 80
EXPOSE 80
