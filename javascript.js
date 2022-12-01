let switchBox = document.querySelector(".dark-mode");
let btn = document.querySelector(".btn");
let body = document.querySelector("body");
let imgShadow = document.querySelectorAll(".img-shadow");
let moon = document.querySelector(".fa-moon");
let sun = document.querySelector(".fa-sun");
let title = document.querySelector(".title-background");
let h1 = document.querySelector("h1");
let h1Change = document.querySelector(".h1-change");
// console.log(switchBox);
// console.log(btn);
// console.log(moon);
// console.log(sun);
console.log(imgShadow);


                                                  // *************************** Dark mode

switchBox.addEventListener("click", function () {
  // console.log("spouew");
  btn.classList.toggle("btn-change");
  body.classList.toggle("body-change");
  moon.classList.toggle("fa-moon-change");
  sun.classList.toggle("fa-sun-change");
  h1.classList.toggle("h1-change");
  for (let i = 0; i < imgShadow.length; i++) {
    imgShadow[i].classList.toggle("img-shadow-change");
  }
});


                                                  // *************************** Menu burger

const hambuergerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector(".nav-bar-mobil");
const mainTitle = document.querySelector("h1");
hambuergerButton.addEventListener("click", toggleNav);

function toggleNav() {
  hambuergerButton.classList.toggle("active");
  navigation.classList.toggle("active");
  mainTitle.classList.toggle("hide-title");
}


                                                  //**************************** Infos Utiles

let allCards = document.querySelectorAll(".paragraphe-hidden");
let allParagraphe = document.querySelectorAll(".paragraphe-txt");


function change(value1){
  value1.classList.toggle("appear");
  // console.log(value1);
  body.classList.toggle("appear-body");
}
for (let i = 0; i< allCards.length;i++){
  allCards[i].addEventListener("click", () => change(allParagraphe[i]));
}