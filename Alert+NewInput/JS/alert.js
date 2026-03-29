'use strict';



function createErrorMessage(text){
    const errorMessage = document.createElement("div");
    const errorBox = document.querySelector("#errorBox");

    const dictObj = dict.find((el) => el["LT"] === text);
    const translatedText = dictObj ? dictObj[languageNow] : text;

    errorMessage.classList.add("alert");
    errorMessage.innerHTML = `<span>${translatedText}</span> <button type='button'>X</button>`;

    const errorButton = errorMessage.querySelector("button");
    errorButton.classList.add("error-btn");

    errorButton.addEventListener('click', ()=>{
        errorBox.removeChild(errorMessage);
    });

    errorBox.appendChild(errorMessage);
    
    setTimeout(()=> errorMessage.style.opacity = "0%", 500);
    setTimeout(()=> errorBox.removeChild(errorMessage), 3000);
}
