let opening = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");
let button1 = document.querySelector(".option-one");
let button2 = document.querySelector(".option-two");
let option1 = document.querySelector(".option-one-screen");
let option2 = document.querySelector(".option-two-screen");
let option1end = document.querySelector(".option-oneA-end");
let option2end = document.querySelector(".option-oneB-end");
let optionend1 = document.querySelector(".option-one-end");
let optionend2 = document.querySelector(".option-two-end");
let buttonMessi1 = document.querySelector(".Messi-one");
let buttonMessi2 = document.querySelector(".Messi-two");
let buttonRonaldo1=document.querySelector(".ronaldo-one");
let buttonRonaldo2=document.querySelector(".ronaldo-two");

buttonRonaldo1.onclick=function(){
    option2.style.display="none";
    optionend1.style.display="block";
};
buttonRonaldo2.onclick=function(){
    option2.style.display="none";
    optionend2.style.display="block";
};
button1.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    option1.style.display = "block";
};
button2.onclick = function() {
    opening.style.display = "none";
    option2.style.display = "block";
console.log("hi");
};
buttonMessi1.onclick=function(){
    option1.style.display="none";
    option1end.style.display="block";
   console.log("hi");
};
buttonMessi2.onclick=function(){
    option1.style.display="none";
    option2end.style.display="block";
   console.log("hi");
};
