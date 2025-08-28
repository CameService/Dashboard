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
updateTime();

let currentImageIndex = 0;
let imagePaths = [];

function showNextImage() {
    const gallery = document.getElementById('image-gallery');
    gallery.innerHTML = '';
    
    if (imagePaths.length === 0) {
        gallery.innerHTML = '<p style="text-align: center; color: #888;">Nessuna immagine trovata.</p>';
        return; 
    }

    const img = document.createElement('img');
    img.src = 'images/' + imagePaths[currentImageIndex];
    img.alt = 'Immagine della galleria';
    gallery.appendChild(img);

    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
}

fetch('images.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} - Controlla che il file images.json esista e sia nella cartella principale.`);
        }
        return response.json();
    })
    .then(data => {
        imagePaths = data;
        showNextImage();
        if (imagePaths.length > 1) {
            setInterval(showNextImage, 15000);
        }
    })
    .catch(error => {
        console.error('Errore nel caricamento del file JSON o delle immagini:', error);
        document.getElementById('image-gallery').innerHTML = `<p style="text-align: center; color: red;">${error.message}</p>`;
    });
