'use strict';

//EmailJS duomenys P.S NE LIESTI KAS LIES TAM PER GALVA DUOSIU
const templateID = 'template_2y1ibpq';
const serviceID = 'service_xtbaear';

emailjs.init(
    {
        publicKey: 'mlsFH5LSh9e3YU7Om'
    }
);

//Mokytoju sarašas
const teachers = [
    {
        name: "Teacher1",
        email: "projekto-teacher1@outlook.com"
    },
    {
        name: "Teacher2",
        email: "projekto-teacher2@outlook.com"
    },
]

//Surinkti duomenys nuo vartotojo
const data = {
};

//Funckija laiško atsiusti
function sendEmail(){
    emailjs.send(serviceID, templateID, data).then(response => console.log("Email buvo sekmingai išsiustas", response.status, response.text), 
    error => {
        console.log("KLAIDA!!!!!", error);
        alert("KLAIDA");
    }
    );
}



