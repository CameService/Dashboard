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

// Variabile per tenere traccia dell'immagine corrente
let currentImageIndex = 0;
let imagePaths = [];

function showNextImage() {
    const gallery = document.getElementById('image-gallery');
    gallery.innerHTML = ''; // Rimuove l'immagine precedente
    
    if (imagePaths.length === 0) return; // Non fare nulla se non ci sono immagini

    const img = document.createElement('img');
    img.src = 'images/' + imagePaths[currentImageIndex];
    img.alt = 'Immagine della galleria';
    gallery.appendChild(img);

    // Passa all'immagine successiva e torna all'inizio se raggiunge la fine
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
}

// Carica il file JSON con i nomi delle immagini
fetch('images.json')
    .then(response => response.json())
    .then(data => {
        imagePaths = data;
        // Avvia la rotazione delle immagini solo dopo averle caricate
        showNextImage();
        setInterval(showNextImage, 15000);
    })
    .catch(error => console.error('Errore nel caricamento del file JSON:', error));
