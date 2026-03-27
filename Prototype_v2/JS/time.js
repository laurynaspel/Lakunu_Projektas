"use strict";

//Laiko ir dienos elementai
const timeDiv = document.querySelector("#time");
const dateDiv = document.querySelector("#date");

//Menesiai
const months = [
  "Sausis",
  "Vasaris",
  "Kovas",
  "Balandis",
  "Gegužė",
  "Birželis",
  "Liepa",
  "Rugpjūtis",
  "Rugsėjis",
  "Spalis",
  "Lapkritis",
  "Gruodis",
];

//Funkcija gauti dabartini laika
function timeNow() {
  let timeHours = new Date().getHours();
  timeHours = timeHours < 10 ? "0" + timeHours : timeHours;

  let timeMinutes = new Date().getMinutes();
  timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
  let timeValue = `${timeHours}:${timeMinutes}`;

  return timeValue;
}

//Funkcija gauti dabartinia data
function dateNow() {
  let monthNumber = new Date().getMonth();

  let monthDay = new Date().getDate();
  monthDay = monthDay < 10 ? "0" + monthDay : monthDay;
  
  let monthValue = `${months[monthNumber]} ${monthDay}`;

  console.log(monthValue);
  
  return monthValue;
}

//Pakeisti teksta puslapije
function changeTime() {
  timeDiv.innerHTML = timeNow();
  dateDiv.innerHTML = dateNow();
}

changeTime();
