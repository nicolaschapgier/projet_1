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

let card = document.querySelector(".paragraphe-hidden");
let paragraphe = document.querySelector(".paragraphe-txt");

card.addEventListener("click", function () {
  console.log("spouew");
  paragraphe.classList.toggle("appear");
  body.classList.toggle("appear-body");
  // title.classList.toggle("appear-body");
});
