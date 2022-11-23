var switchBox = document.querySelector(".dark-mode");
var btn = document.querySelector(".btn");
var icone = document.querySelector("i");
var body = document.querySelector("body");


console.log(switchBox);
console.log(btn);
console.log(icone);
console.log(body);

switchBox.addEventListener('click',function(){
    console.log("spouew");
    btn.classList.toggle("btn-change");
    icone.classList.toggle("icone-change")
    icone.classList.toggle("fa-sun");
    body.classList.toggle("body-change")
})