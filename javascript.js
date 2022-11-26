let switchBox = document.querySelector(".dark-mode");
let btn = document.querySelector(".btn");
let body = document.querySelector("body");
let imgShadow = document.querySelectorAll(".img-shadow");
let moon = document.querySelector(".fa-moon");
let sun = document.querySelector(".fa-sun");
let title = document.querySelector(".title-background");

// console.log(switchBox);
// console.log(btn);
// console.log(moon);
// console.log(sun);
console.log(imgShadow);

switchBox.addEventListener("click", function () {
  // console.log("spouew");
  btn.classList.toggle("btn-change");
  body.classList.toggle("body-change");
  moon.classList.toggle("fa-moon-change");
  sun.classList.toggle("fa-sun-change");
  for (let i = 0; i < imgShadow.length; i++) {
    imgShadow[i].classList.toggle("img-shadow-change");
  }
});

//départ  ********************************************************************
// card.addEventListener("click", function () {
//   console.log("spouew");
//   paragraphe.classList.toggle("appear");
//   body.classList.toggle("appear-body");
// });
// title.classList.toggle("appear-body");

let allCards = document.querySelectorAll(".paragraphe-hidden");
let card = document.querySelector(".paragraphe-hidden");

allCards.forEach(function (card) {
  card.addEventListener("click", function () {
    console.log("spouew");
    body.classList.toggle("appear-body");
  });
});

let allParagraphe = document.querySelectorAll(".paragraphe-txt");
let paragraphe = document.querySelector(".paragraphe-txt");

console.log(allParagraphe);

allParagraphe.forEach(function (paragraphe) {
  paragraphe.addEventListener("click", function () {
    console.log("spouew2");
    paragraphe.classList.toggle("appear");
  });
});




// ***************************************************** Devrait foncionner non ?***************************
// card.addEventListener("click",bodyOpacity);

// function bodyOpacity(paragraphe, body){
//   console.log("spouew");
//   paragraphe.classList.toggle("appear");
//   body.classList.toggle("appear-body");
// }
// **********************************************************************************************************

// ***************************menu burger
const hambuergerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector(".nav-bar-mobil");
const mainTitle = document.querySelector("h1");
hambuergerButton.addEventListener("click", toggleNav);

function toggleNav() {
  hambuergerButton.classList.toggle("active");
  navigation.classList.toggle("active");
  mainTitle.classList.toggle("hide-title");
}
