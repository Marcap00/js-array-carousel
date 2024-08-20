/* 
1- Recuperiamo dal DOM gli elementi
2- Preparo l'array
3- Genero le immagini
4- Mettiamo in ascolto sugli eventi i bottoni
*/

// # Fase di preparazione
// Recuperiamo gli elementi dal DOM
const leftButton = document.getElementById('left');
console.log(leftButton);
const rightButton = document.getElementById('right');
console.log(rightButton);
const gallery = document.getElementById('gallery');
console.log(gallery);
const thumbnailsGallery = document.getElementById('thumbnails');
console.log(thumbnailsGallery);

// Preparo l'array delle sorgenti
const sources = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
console.table(sources);
// Genero le immagini
let image = '';

for (let i = 0; i < sources.length; i++) {
    const src = sources[i]
    image += `<img src="${src}">`;
}

// Aggancio le immagini alla gallery
gallery.innerHTML = image;
thumbnailsGallery.innerHTML = image;

// Recuperiamo dal DOM le immagini
const images = document.querySelectorAll('#gallery img');
console.log(images);
const thumbnails = document.querySelectorAll('#thumbnails img');
console.log(thumbnails);

// Assegnamo active alla prima immagine per vederla
let activeIndex = 0;
images[activeIndex].classList.add('active');
thumbnails[activeIndex].classList.add('active');

// # Fase di gestione eventi
// Mettiamo in ascolto il bottone sinistro
leftButton.addEventListener('click', function () {
    images[activeIndex].classList.remove('active');
    thumbnails[activeIndex].classList.remove('active');

    activeIndex--;

    if (activeIndex < 0) activeIndex = images.length - 1;
    
    images[activeIndex].classList.add('active');
    thumbnails[activeIndex].classList.add('active');
})

// Mettiamo in ascolto il bottone destro
rightButton.addEventListener('click', function () {
    images[activeIndex].classList.remove('active');
    thumbnails[activeIndex].classList.remove('active');

    activeIndex++;
    
    if (activeIndex === images.length) activeIndex = 0;

    images[activeIndex].classList.add('active');
    thumbnails[activeIndex].classList.add('active');
})

for (let i = 0; i < thumbnails.length; i++) {
    const thumbnail = thumbnails[i];
    thumbnail.addEventListener ('click', function() {
        images[activeIndex].classList.remove('active');
        thumbnails[activeIndex].classList.remove('active');

        activeIndex = i;

        images[activeIndex].classList.add('active');
        thumbnails[activeIndex].classList.add('active');

    })
}

