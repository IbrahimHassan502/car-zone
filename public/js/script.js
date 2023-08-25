"use strict";
/*
===================== menu button =====================
*/
const menuBtn = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-list");
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("-translate-y-full");
});
