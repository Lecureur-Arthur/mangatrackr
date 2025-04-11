document.addEventListener("DOMContentLoaded", function () {
  fetch('/api/mangas')
    .then(response => response.json())
    .then(data => {
      const mangasList = document.getElementById('mangas-list');
      data.forEach(manga => {
        const card = document.createElement('div');
        card.classList.add('manga-card');

        card.innerHTML = `
        <img src="${manga.coverImage}" alt="Couverture de ${manga.title}" class="cover-image" />
        <h2>${manga.title}</h2>
        <h3>Auteur : ${manga.author}</h3>
        <p>${manga.synopsis}</p>
      `;

        mangasList.appendChild(card);
      });
    })
    .catch(error => console.error('Erreur :', error));
});
