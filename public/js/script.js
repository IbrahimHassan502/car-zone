"use strict";
/*
===================== function to add array of classes =====================
*/
function addClasses(element, classes) {
  classes.forEach((addedClass) => element.classList.add(addedClass));
}
function removeClasses(element, classes) {
  classes.forEach((removedClass) => element.classList.remove(removedClass));
}
/*
===================== menu button =====================
*/
const menuBtn = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-list");
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("-translate-y-full");
});

/*
===================== animate section titles when in veiw =====================
*/
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        return;
      }
    });
  }
  // { threshold: 0.35 }
);

const allAnimatedElements = document.querySelectorAll(".animate");
allAnimatedElements.forEach((element) => {
  observer.observe(element);
});
