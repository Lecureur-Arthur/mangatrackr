document.addEventListener("DOMContentLoaded", function() {
  fetch('/api/mangas')
    .then(response => response.json())
    .then(data => {
      const mangasList = document.getElementById('mangas-list');
      data.forEach(manga => {
        const li = document.createElement('li');
        li.textContent = `${manga.title} by ${manga.author}`;
        mangasList.appendChild(li);
      });
    })
    .catch(error => console.error('Erreur :', error));
});
