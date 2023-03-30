'use strict';

const removeFadeIn = function () {
    document.querySelector('.menu').classList.remove('fade-in');
}

let intervalID = setInterval(removeFadeIn, 2000);

const menuClick = function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}