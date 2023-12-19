//Dichiarati contenitori elementi
const myContainer = document.querySelector('.img-container');
const myThumbnail = document.querySelector('.thumbnail');

//Dichiarazioni bottoni 
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
const stopButton = document.getElementById('stop-button');

// NUOVO ARRAY OGGETTI
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

console.log(images, typeof images);

let counter = 0;

let myContent;

// Ciclo sull'array
images.forEach ((element, index)=>{
    console.log(element, index);

    // Stampe immagini 
    myContent= `<div class="w-100 my-p-relative my-card`
        if (index == 0){
            myContent+= ` active`
        }
    myContent+=`">
        <img id="img-1" class="w-100 h-100 obj-cover" src="${element['url']}" alt="Immagine 1">
        <div class="my-p-absolute">
            <h2 class="text-white my-2 fw-bold text-end fs-1">${element['title']}</h2>
            <p class="text-white fs-5 text-end">${element['description']}</p>
        </div>
    </div>`;

    myContainer.innerHTML+= myContent;
});

const myCards = document.querySelectorAll('.my-card');

rightButton.addEventListener('click', function(){
    
    document.querySelector('.active').classList.remove('active');

    if (counter < images.length -1){
        counter ++;
    } else{
        counter = 0;
    }

    console.log(counter);


    myCards[counter].classList.add('active');
});

leftButton.addEventListener('click', function(){

    document.querySelector('.active').classList.remove('active');
    
    if ((counter !== images.length) && (counter !== 0)){

        counter --
    }
    else{
        counter = images.length -1;
    }

    console.log(counter);

    myCards[counter].classList.add('active');
    
});
        
       





