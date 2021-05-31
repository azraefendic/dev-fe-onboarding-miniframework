import {animatedScrollTo} from './es6-scroll-to.js';

// document.querySelector('.title').innerHTML = 'Great success!'
// document.querySelector('.text').innerHTML = 'Javascript is working!'

let header = document.querySelector('.main-conversion__headline');
let button = document.querySelector('.main-conversion__content-button');
let headline = document.querySelector('.main-conversion__content-headline');

button.addEventListener('click', () => {
    console.log("Clicked!!");
    header.innerHTML = 'CtA - Main conversion - Red Headline';
    headline.style.color = "salmon";
} )


animatedScrollTo(500);