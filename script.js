function updateTime() {
    // Ora e data di Treviso
    const trevisoTime = new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('treviso-time').innerHTML = `Treviso: ${trevisoTime}`;

    // Altre città
    const moscowTime = new Date().toLocaleString('it-IT', { timeZone: 'Europe/Moscow', hour: '2-digit', minute: '2-digit' });
    document.getElementById('moscow-time').innerHTML = `Mosca: ${moscowTime}`;

    const dubaiTime = new Date().toLocaleString('it-IT', { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit' });
    document.getElementById('dubai-time').innerHTML = `Dubai: ${dubaiTime}`;

    const moroccoTime = new Date().toLocaleString('it-IT', { timeZone: 'Africa/Casablanca', hour: '2-digit', minute: '2-digit' });
    document.getElementById('morocco-time').innerHTML = `Marocco: ${moroccoTime}`;

    const algeriaTime = new Date().toLocaleString('it-IT', { timeZone: 'Africa/Algiers', hour: '2-digit', minute: '2-digit' });
    document.getElementById('algeria-time').innerHTML = `Algeria: ${algeriaTime}`;
}

// Aggiorna l'orologio ogni secondo
setInterval(updateTime, 1000);
updateTime(); // Esegui subito per evitare un ritardo iniziale

// Funzione per caricare le immagini
function loadImages() {
    const gallery = document.getElementById('image-gallery');
    
    // Elenco delle immagini. Devono trovarsi nella cartella 'images' del tuo repository.
    const imagePaths = [
        'images/foto1.jpg',
        'images/foto2.png',
        'images/foto3.gif'
        // Aggiungi qui gli altri nomi dei tuoi file immagine
    ];

    imagePaths.forEach(path => {
        const img = document.createElement('img');
        img.src = path;
        img.alt = 'Immagine della galleria';
        gallery.appendChild(img);
    });
}

// Carica le immagini quando la pagina è pronta
document.addEventListener('DOMContentLoaded', loadImages);