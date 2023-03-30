'use strict';

const menuBtn = document.querySelector('.menu-btn');
const waterfall = document.querySelector('.container>.waterfall');
const navBar = document.querySelector(`.container>.nav-bar`)
let menuBtnClicks = 0;

menuBtn.onclick = function () {
    menuBtnClicks++;
    console.log(menuBtnClicks);
    navBar.classList.toggle('inactive');
    navBar.classList.toggle('active');

    if (menuBtnClicks % 2 === 0) {
        waterfall.style.margin = '3vw';
        waterfall.style.height = '97vh';
    } else {
        waterfall.style.margin = '3vh 3vw';
        waterfall.style.height = '70vh';
    }
}

const rightNavArrow = document.querySelector('.right-nav-arrow');
const leftNavArrow = document.querySelector('.left-nav-arrow');