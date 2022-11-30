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


                                                  // *************************** Dark mode

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

// console.log(allParagraphe);
// allCards[0].addEventListener("click", function () {
//   allParagraphe[0].classList.toggle("appear");
//   body.classList.toggle("appear-body");
// });
// allCards[1].addEventListener("click", function () {
//   allParagraphe[1].classList.toggle("appear");
//   body.classList.toggle("appear-body");
// });
// allCards[2].addEventListener("click", function () {
//   allParagraphe[2].classList.toggle("appear");
//   body.classList.toggle("appear-body");
// });

function change(value1){
  // console.log(value1);
  // body.classList.toggle("appear-body");
  value1.classList.toggle("appear");
}
for (let i = 0; i< allCards.length;i++){
  allCards[i].addEventListener("click", () => change(allParagraphe[i]));
}


// *ça fonctionne en dessous
// allCards[0].addEventListener("click", () => change(allParagraphe[0]));
// allCards[1].addEventListener("click", () => { change (allParagraphe[1])});
// allCards[2].addEventListener("click", () => { change (allParagraphe[2])});

