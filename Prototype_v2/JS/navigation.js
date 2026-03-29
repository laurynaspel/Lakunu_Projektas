"use strict";

//Visi svetainės puslapiai pagal ID
const pages = [
  document.querySelector("#welcomePage"),
  document.querySelector("#registrationPage"),
  document.querySelector("#directionPage"),
  document.querySelector("#succefulPage"),
];

//Mygtukai
const backButtons = document.querySelectorAll("#backButton");
const forwardButtons = document.querySelectorAll("#forwardButton");
const resetButton = document.querySelector("#lastButton");

//Puslapio kuris turi buti atidarytas dabar
let pageNow = 0;

//Puslapio pakeitimai
function pageChange() {
  pages.forEach((el, i) => {
    //Jeigu indeksas sutampa su dabartinio puslapio indekso jo display gauna reiksme "block", kitaip "none"
    el.style.display = i === pageNow ? "flex" : "none";
  });
  //Mygtukai toliau
  forwardButtons.forEach((el) => el.addEventListener("click", pageForward));
  //Mygtukai atgal
  backButtons.forEach((el) => el.addEventListener("click", pageBack));
}

//Vienu puslapiu pirmyn
const pageForward = () => {
  pageNow++;
  pageChange();
};

//Vienu puslapiu atgal
const pageBack = () => {
  pageNow--;
  pageChange();
};

//Funkciju priskirimas mygtukams

backButtons.forEach((el) => el.addEventListener("click", pageBack));
forwardButtons.forEach((el) => el.addEventListener("click", pageForward));
resetButton.addEventListener("click", () => window.location.reload());

pageChange();
