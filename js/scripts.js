// JavaScript per inizializzare Masonry quando la pagina è pronta
document.addEventListener("DOMContentLoaded", function () {
    const grid = document.querySelector('#masonry-grid');
    new Masonry(grid, {
        itemSelector: '.gallery-item',  // Seleziona gli elementi della galleria
        columnWidth: '.gallery-item',   // La larghezza delle colonne si basa sugli item
        percentPosition: true           // Posizionamento percentuale per la responsività
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Grazie per averci contattato! Ti risponderemo al più presto.");
});

