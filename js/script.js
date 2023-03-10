
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

// dichiaro la variabile corrispondente al contenitore delle thumbnails
let thumbnailContainerElement = document.getElementById("thumbnails-container");

// dichiaro le variabili corrispondenti ai due pulsanti relativi all'auto scorrimento dello slideshow 
let startAndStopButtonElement = document.getElementById("start-stop");
let invertButtonElement = document.getElementById("invert");

// dichiaro una variabile indice corrispondente all'indice dell'immagine dello slideshow
let index = 0;

// creo una variabile di controllo per il pulsante start&stop
let StartAndStopIsClicked = false;

// creo una variabile di controllo per il pulsante invert
let invertIsClicked = false;



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



/* -------------------------------------------------------------------------- */
/*                            START AND STOP BUTTON                           */
/* -------------------------------------------------------------------------- */

// dichiaro la variabile a cui assegnare la funzione dell'intervallo di tempo
let clickInterval;


// imposto l'evento click del pulsante start&stop
startAndStopButtonElement.addEventListener("click", function(){
    
    // se la variabile di controllo del pulsante è vera 
    if(StartAndStopIsClicked){
        
        // rimuovo l'esecuzione della funzione 
        clearInterval(clickInterval);

        // reimposto la variabile di controllo
        StartAndStopIsClicked = false;

        // cambio il testo del pulsante
        this.innerText = "Start Autoplay";

        // cambio il colore del pulsante
        this.style.backgroundColor = "green";
        
    // altrimenti
    }else{
        
        // attivo l'esecuzione della funzione
        clickInterval = setInterval(arrowDownClick, 3000);

        // reimposto la variabile di controllo
        StartAndStopIsClicked = true;

        // cambio il testo del pulsante
        this.innerText = "Stop Autoplay";

        // cambio il colore del pulsante
        this.style.backgroundColor = "red";

    }
});


/* -------------------------------------------------------------------------- */
/*                                INVERT BUTTON                               */
/* -------------------------------------------------------------------------- */


// imposto l'evento click del pulsante inverti
invertButtonElement.addEventListener("click",function(){

    // se ho cliccato il pulsante start E la variabile di controllo è falsa
    if (StartAndStopIsClicked == true  && invertIsClicked == false){

        // rimuovo la funzione precedente
        clearInterval(clickInterval);
        
        // imposto la funzione arrowUp in esecuzione
        clickInterval = setInterval(arrowUpClick,3000);

        // reimposto la variabile di controllo
        invertIsClicked = true;

    // eltrimenti se il pulsante start è stato cliccato e la variabile di controllo è vera 
    }else if(StartAndStopIsClicked == true && invertIsClicked == true) {

        // rimuovo la funzione precedente
        clearInterval(clickInterval);

        // imposto la funzione arrowDown in esecuzione
        clickInterval = setInterval(arrowDownClick, 3000);

        // reimposto la variabile di controllo
        invertIsClicked = false;

    }

});




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

// ciclo di creazione delle thumbnail 
images.forEach( (elemento, actualIndex) =>{

    // creo il nuovo elemento in pagina che corrisponderà alla thumbnail
    let newThumbnail = document.createElement("div");

    // aggiungo una classe di stile
    newThumbnail.classList.add("thumbnail");

    // imposto l'altezza alla thumbnail in base al numero di thumbnail da creare
    newThumbnail.style.height = "calc(100% /" + images.length + ")";

    // imposto il background delle thumbnails
    newThumbnail.style.backgroundImage ='url("' + elemento.image + '")';


    // al click della thumbnail
    newThumbnail.addEventListener("click", () =>{

        // rimuovo la classe active dalla thumbnail precedente
        thumbnails[index].classList.remove("active");

        // reimposto l'index
        index = actualIndex;

        // cambio immagine titolo e caption
        changeImgTitleCaption(imageElement, imageTitleElement, imageCaptionElement, images);
        
        // aggiungo la classe active alla thumbnail
        thumbnails[index].classList.add("active");


    });

    // attribuisco la genitorialità
    thumbnailContainerElement.append(newThumbnail);


})

// creo un array contenente tutti gli elementi HTML delle thumbnail
const thumbnails = document.querySelectorAll(".thumbnail");

// imposto lo stato iniziale di immagine, titolo e caption
changeImgTitleCaption(imageElement, imageTitleElement, imageCaptionElement, images);

// aggiungo la classe active alla thumbnail iniziale
thumbnails[index].classList.add("active");




/* -------------------------------------------------------------------------- */
/*                                  ARROW UP                                  */
/* -------------------------------------------------------------------------- */


// imposto l'evento click della freccia su
arrowUpElement.addEventListener("click", () =>{

    // al click della freccia su tolgo la classe active dalla thumbnail precedente
    thumbnails[index].classList.remove("active");


    // se l'indice dello slideshow è minore della lunghezza dell'array -1
    if(index <= images.length - 1  && index >= 1){

        // aumento l'indice
        index--;

        // cambio immagine titolo e caption in base all'index
        changeImgTitleCaption (imageElement, imageTitleElement, imageCaptionElement, images);

        // imposto la classe active alla thumbnail relativa all'index
        thumbnails[index].classList.add("active");


    // altrimenti
    }else {

        // imposto l'indice alla lunghezza dell'array -1 
        index = images.length - 1;

        // cambio immagine titolo e caption in base all'index
        changeImgTitleCaption (imageElement, imageTitleElement, imageCaptionElement, images);

        // imposto la classe active alla thumbnail relativa all'index
        thumbnails[index].classList.add("active");

    }

})


/* -------------------------------------------------------------------------- */
/*                                 ARROW DOWN                                 */
/* -------------------------------------------------------------------------- */


// imposto l'evento click della freccia giu
arrowDownElement.addEventListener("click", () =>{


    // al click della freccia su tolgo la classe active dalla thumbnail precedente
    thumbnails[index].classList.remove("active");

    
    // se l'indice dello slideshow è minore o uguale alla lunghezza dell'array -1 E l'indice è maggiore uguale a 1 
    if(index < images.length - 1){
    
        // diminuisco l'indice
        index++;

        // cambio immagine titolo e caption in base all'index
        changeImgTitleCaption (imageElement, imageTitleElement, imageCaptionElement, images);

        // imposto la classe active alla thumbnail relativa all'index
        thumbnails[index].classList.add("active");


    // altrimenti    
    }else {

        // reimposto l'indice a 0
        index = 0;

        // cambio immagine titolo e caption in base all'index
        changeImgTitleCaption (imageElement, imageTitleElement, imageCaptionElement, images); 

        // imposto la classe active alla thumbnail relativa all'index
        thumbnails[index].classList.add("active");   

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
    
};


// creo l'elemento caption
function createImageCaption (){

    // creo l'elemento div corrispettivo alla caption nel DOM
    let imageCaption = document.createElement("div");
    
    // gli attribuisco una classe di stile
    imageCaption.classList.add("caption");
    
    // scrivo la caption all'interno
    imageCaption.innerText = "";  

    // return imageCaption
    return imageCaption;
    
};


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
};



// funzione che clicca il pulsante in pagina arrowDown
function arrowDownClick(){

    // simulo il click dell'elemento in pagina
    document.getElementById("arrow-down").click();

};



// funzione che clicca il pulsante in pagina arrowUp
function arrowUpClick(){

    // simulo il click dell'elemento in pagina
    document.getElementById("arrow-up").click();

};