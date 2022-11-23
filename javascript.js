let switchBox = document.querySelector(".dark-mode");
let btn = document.querySelector(".btn");
let body = document.querySelector("body");
let imgShadow = document.querySelector(".flex-container div img")
let moon = document.querySelector(".fa-moon");
let sun = document.querySelector(".fa-sun");

// console.log(switchBox);
// console.log(btn);
console.log(moon);
console.log(sun);

switchBox.addEventListener('click',function(){
    console.log("spouew");
    btn.classList.toggle("btn-change");
    body.classList.toggle("body-change");
    imgShadow.classList.toggle("img-shadow-change");
    moon.classList.toggle("fa-moon-change");
    sun.classList.toggle("fa-sun-change");
})

