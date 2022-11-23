let switchBox = document.querySelector(".dark-mode");
let btn = document.querySelector(".btn");
// let icone = document.querySelector("i");
let body = document.querySelector("body");


console.log(switchBox);
console.log(btn);
// console.log(icone);
console.log(body);

switchBox.addEventListener('click',function(){
    console.log("spouew");
    btn.classList.toggle("btn-change");
    // icone.classList.toggle("icone-change")
    // icone.classList.toggle("fa-sun");
    body.classList.toggle("body-change")
})