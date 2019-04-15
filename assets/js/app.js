(function(){

	"use strict"

let result = document.getElementById("result");
let btn = document.getElementById("btn");

btn.addEventListener("click",function(){

let destinies = ["大凶","凶","小吉","吉","中吉","大吉"];
let num = Math.floor(Math.random() * destinies.length);

result.innerHTML = destinies[num];


})
})();

