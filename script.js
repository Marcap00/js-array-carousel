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

// Preparo l'array delle sorgenti
const sources = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
console.table(sources);
// Genero le immagini
let image = '';

for (let i = 0; i < sources.length; i++) {
    image += `<img src="${sources[i]}">`;
}

// Aggancio le immagini alla gallery
gallery.innerHTML = image;

// Recuperiamo dal DOM le immagini
const images = document.querySelectorAll('#gallery img');
console.log(images);

// Assegnamo active alla prima immagine per vederla
images[0].className = 'active';

