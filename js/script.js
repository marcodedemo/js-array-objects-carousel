
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.


// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.


// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.


// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.


// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.


// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

// dichiaro le variabili corrispondenti alle frecce
let arrowUpElement = document.getElementById("arrow-up");
let arrowDownElement = document.getElementById("arrow-down");

// dichiaro la variabile corrispondente al container dell'immagine, del titolo e della descrizione
let imageContainerElement = document.getElementById("imgs-container");

// dichiaro la variabile corrispondente all'immagine dello slideshow
let imageElement = document.getElementById("slideshow-image");

// dichiaro una variabile indice corrispondente all'indice dell'immagine dello slideshow
let index = 0;

// array di oggetti
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



// creo l'elemento div contenitore dei testi nel DOM
let imageTextElement = document.createElement("div");

// gli attribuisco una classe di stile
imageTextElement.classList.add("text");

// attribuisco la genitorialità
imageContainerElement.append(imageTextElement);


/* -------------------------------------------------------------------------- */

// imposto una variabile alla funzione di creazione del titolo
let imageTitleElement = createImageTitle();

// attribuisco la genitorialità dell'elemento titolo
imageTextElement.append(imageTitleElement);


// imposto una variabile alla funzione di creazione della caption 
let imageCaptionElement = createImageCaption();

// attribuisco la genitorialità dell'elemento caption
imageTextElement.append(imageCaptionElement);


/* -------------------------------------------------------------------------- */


// imposto lo stato iniziale di immagine, titolo e caption
changeImgTitleCaption(imageElement, imageTitleElement, imageCaptionElement, images);






// imposto l'evento click della freccia su
arrowUpElement.addEventListener("click", () =>{

    // se l'indice dello slideshow è minore della lunghezza dell'array -1
    if(index < images.length - 1){

        // aumento l'indice
        index++;

        // cambio immagine titolo e caption in base all'index
        changeImgTitleCaption (imageElement, imageTitleElement, imageCaptionElement, images);

    // altrimenti
    }else {

        // reimposto l'indice a 0
        index = 0;

        // cambio immagine titolo e caption in base all'index
        changeImgTitleCaption (imageElement, imageTitleElement, imageCaptionElement, images);

    }

})





// imposto l'evento click della freccia giu
arrowDownElement.addEventListener("click", () =>{

    // se l'indice dello slideshow è minore o uguale alla lunghezza dell'array -1 E l'indice è maggiore uguale a 1 
    if(index <= images.length - 1  && index >= 1){
    
        // diminuisco l'indice
        index--;

        // cambio immagine titolo e caption in base all'index
        changeImgTitleCaption (imageElement, imageTitleElement, imageCaptionElement, images);

    // altrimenti    
    }else {

        // imposto l'indice alla lunghezza dell'array -1 
        index = images.length - 1;

        // cambio immagine titolo e caption in base all'index
        changeImgTitleCaption (imageElement, imageTitleElement, imageCaptionElement, images);        
    }
})






/* -------------------------------------------------------------------------- */
/*                                  functions                                 */
/* -------------------------------------------------------------------------- */


// creo l'elemento titolo 
function createImageTitle(){

    // creo l'elemento div corrispettivo al titolo nel DOM
    let imageTitle = document.createElement("div");
    
    // gli attribuisco una classe di stile
    imageTitle.classList.add("title");
    
    // scrivo il titolo all'interno
    imageTitle.innerText = "";

    // return imageTitle
    return imageTitle;
    
}


// creo l'elemento caption
function createImageCaption (){

    // creo l'elemento div corrispettivo alla caption nel DOM
    let imageCaption = document.createElement("div");
    
    // gli attribuisco una classe di stile
    imageCaption.classList.add("caption");
    
    // scrivo la caption all'interno
    imageCaption.innerText = "";  

    return imageCaption;
    
}


/**
 * funzione che inizializza l'immagine il titolo e la caption
 * @param {HTMLelement} image
 * @param {HTMLelement} title
 * @param {HTMLelement} caption
 * @param {array} array
 * @returns {any}
 */

function changeImgTitleCaption (image, title, caption, array){

    // imposto l'immagine di partenza dello slideshow
    image.src = array[index].image;

    // imposto il titolo dell'immagine di partenza
    title.innerText = array[index].title;

    // imposto la descrizione dell'immagine di partenza
    caption.innerText = array[index].text;
}