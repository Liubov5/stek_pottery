/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*=============== Menu show ===============*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=============== menu hidden ===============*/

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show-menu close
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


var swiper = new Swiper(".mySwiper", {
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
      
        // when window width is >= 640px
        768: {
            slidesPerView:2,
            spaceBetween: 30
        },
        1023:{
            slidesPerView:3,
            spaceBetween: 30
        }
      }
});

let description_btn_left = document.querySelector(".description__control-left");
let description_btn_right =  document.querySelector(".description__control-right");
let description_wrap =  document.querySelector(".description__wrap");
let description_controls_dots = document.querySelector(".description__controls__dots");
let cards = document.querySelectorAll(".card");

let change_value = 0;
let dots_index = 0;
let last_index = dots_index;

let number_of_slides = Math.round(description_wrap.clientWidth / (window.innerWidth - 40));

for(let i = 0; i < number_of_slides; i++) {
    let dot = document.createElement("img");
    description_controls_dots.appendChild(dot);
    dot.src = "assets/img/dot.png";
    dot.classList.add("description__controls__dots-img");
}

let description_dots_img = document.querySelectorAll(".description__controls__dots-img");
description_dots_img[last_index].style.background = "white";

description_btn_left.onclick = function() {
    if(change_value < 0) {
        dots_index--;
        change_dots(dots_index); 
        change_value += (window.innerWidth - 40);
        description_wrap.style.transform = `TranslateX(${change_value}px)`;
    }
}
description_btn_right.onclick = function() {
    if(Math.abs(change_value) != (number_of_slides - 1) * (window.innerWidth - 40)) {
        dots_index++;
        change_dots(dots_index);
        change_value -= (window.innerWidth - 40);
        description_wrap.style.transform = `TranslateX(${change_value}px)`;
    }
}

let change_dots=(index)=>{
    description_dots_img[last_index].style.background = "none";
    description_dots_img[index].style.background = "white";
    last_index = index;
}

let flag = true;
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("touchstart", (event)=>{
        if(flag) {
            cards[i].firstElementChild.style.transform="rotateY(180deg)";
            cards[i].lastElementChild.style.transform="rotateY(360deg)";
            flag = false;
        } else {
            cards[i].firstElementChild.style.transform="rotateY(0deg)";
            cards[i].lastElementChild.style.transform="rotateY(180deg)";
            flag = true;
        } 
    })
}