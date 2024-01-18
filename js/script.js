"use strict";//Returns all errors

//Menu Burger
const burgerIcone = document.getElementById('burgerIcone');
const liste = document.getElementById('myListe');

burgerIcone.addEventListener('click', function() {
    liste.classList.toggle('active');
});

//Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
