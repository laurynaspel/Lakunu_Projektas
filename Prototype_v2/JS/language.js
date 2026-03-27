'use strict';

const languageButtons = document.querySelectorAll("#langButton");

const dict = [
    {
        LT: "Sveiki atvykę",
        EN: "Welcome"
    },
    
]

let languageNow = "LT";

function changeButtonBackground(){
    languageButtons.forEach(el => {
        if(el.textContent == languageNow) el.classList.add("active");
        else el.classList.remove("active");
    });
}

function changeLanguage(){
    const htmlElements = document.querySelector("body").querySelectorAll("*");
    htmlElements.forEach(element => {
        let dictObjNow = dict.find(el => el[languageNow] === element.textContent);
        if(dictObjNow){
            element.textContent = languageNow == "LT" ? dictObjNow.EN : dictObjNow.LT;
        }
        
    });

    
}

languageButtons.forEach(el => el.addEventListener('click', () =>{ 
    changeLanguage();
    languageNow = el.textContent;
    changeButtonBackground();
}));

