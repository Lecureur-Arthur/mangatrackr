document.addEventListener("DOMContentLoaded", function () {
  fetch('/api/mangas')
    .then(response => response.json())
    .then(data => {
      const mangasList = document.getElementById('mangas-list');
      data.forEach(manga => {
        const card = document.createElement('div');
        card.classList.add('manga-card');

        card.innerHTML = `
          <h2>${manga.title}</h2>
          <p><strong>Auteur :</strong> ${manga.author}</p>
        `;

        mangasList.appendChild(card);
      });
    })
    .catch(error => console.error('Erreur :', error));
});
