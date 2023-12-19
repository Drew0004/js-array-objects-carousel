//Dichiarati contenitori elementi
const myContainer = document.querySelector('.img-container');
const myThumbnail = document.querySelector('.thumbnail');

// Array contentene immagini carosello 
const myImages = [
    `<img id="img-1" class="w-100 h-100 obj-cover mx-3" src="img/01.webp" alt="Immagine 1">`,
    `<img id="img-2" class="w-100 h-100 obj-cover mx-3" src="img/02.webp" alt="Immagine 2">`,
    `<img id="img-3" class="w-100 h-100 obj-cover mx-3" src="img/03.webp" alt="Immagine 3">`,
    `<img id="img-4" class="w-100 h-100 obj-cover mx-3" src="img/04.webp" alt="Immagine 4">`,
    `<img id="img-5" class="w-100 h-100 obj-cover mx-3" src="img/05.webp" alt="Immagine 5">`
]

console.log(myImages, typeof myImages);

// Stampa dell'array
myContainer.innerHTML = myImages[0];

//Dichiarazioni bottoni 
const lefttButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
const stopButton = document.getElementById('stop-button');

// Dichiarazione costani elementi html immagini thumbnail
const myImg1 = document.createElement('img');
myImg1.classList.add('d-block', 'w-100', 'h-100', 'obj-cover', 'px-2', 'rounded-5');
myImg1.src = 'img/01.webp';

const myImg2 = document.createElement('img');
myImg2.classList.add('d-block', 'w-100', 'h-100', 'obj-cover', 'px-2', 'rounded-5');
myImg2.src = 'img/02.webp';

const myImg3 = document.createElement('img');
myImg3.classList.add('d-block', 'w-100', 'h-100', 'obj-cover', 'px-2', 'rounded-5');
myImg3.src = 'img/03.webp';

const myImg4 = document.createElement('img');
myImg4.classList.add('d-block', 'w-100', 'h-100', 'obj-cover', 'px-2', 'rounded-5');
myImg4.src = 'img/04.webp';

const myImg5 = document.createElement('img');
myImg5.classList.add('d-block', 'w-100', 'h-100', 'obj-cover', 'px-2', 'rounded-5');
myImg5.src = 'img/05.webp';

// Array immagini thumbnail
const myImgThumbnail = [myImg1, myImg2, myImg3, myImg4, myImg5];

// PROSSIMO STEP -- Creare contatore (linkato agli  indici dell'array) 
// che sale e scende
let counter = 0;

// intervallo automatico avanti


function stampPic(){
    if (counter < myImages.length-1){

        counter ++
        console.log(counter);
       
    }
    else{
        counter = 0;
    }

    myContainer.innerHTML= myImages[counter];
}

let clock = setInterval(stampPic,3000);


// evento stop bottone
stopButton.addEventListener('click', function(){
    clearInterval(clock);
})


// Creati eventi bottoni
rightButton.addEventListener('click', function(){

    if (counter < myImages.length-1){

        counter ++
        console.log(counter);
       
    }
    else{
        counter = 0;
    }

    myContainer.innerHTML= myImages[counter];
})

lefttButton.addEventListener('click', function(){
    
    if ((counter !== myImages.length) && (counter !== 0)){

        counter --
        console.log(counter);
        
       
    }
    else{
        counter = myImages.length -1;
    }

    myContainer.innerHTML= myImages[counter];
})

// Creato ciclo che stampa e modifica immagini al click
for(let i = 0; i < myImgThumbnail.length; i++){
    let buttonThumbnail = document.createElement('a');
    buttonThumbnail.append(myImgThumbnail[i]);

    myThumbnail.append(buttonThumbnail);

    myImgThumbnail[i].addEventListener('click', function(){
        myContainer.innerHTML = (myImages[i]);
    })
}



