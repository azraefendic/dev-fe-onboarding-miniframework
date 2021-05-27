import {animatedScrollTo} from './es6-scroll-to.js';

// document.querySelector('.title').innerHTML = 'Great success!'
// document.querySelector('.text').innerHTML = 'Javascript is working!'

let header = document.querySelector('.main-conversion-headline');
let button = document.querySelector('.content-button');
let headline = document.querySelector(".content-headline");

button.addEventListener('click', () => {
    console.log("Clicked!!");
    header.innerHTML = 'CtA - Main conversion - Red Headline';
    headline.style.color = "red";
} )


animatedScrollTo(500);