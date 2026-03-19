'use strict';

const service = 'service_vdqpt0p';
const template = 'template_w5ljwey';

emailjs.init({
    publicKey: '1YhF3v6TzDCHj2lR9'
});

const mainForm = document.querySelector("form");
const teacherSelect = document.querySelector("#teachers");
const emailInput = document.querySelector("#email");

const teachers = [
    {
        name: "Vardas Pavardenis",
        email: "psixuxka123@gmail.com"
    },
    {
        name: "Kazkas Kazkanas",
        email: "killcook128@gmail.com"
    }
];

teachers.forEach(el => {
    const newOption = document.createElement("option");
    newOption.value = el["name"];
    newOption.text = el["name"];

    teacherSelect.appendChild(newOption);
});

teacherSelect.addEventListener('change', () => {
    teachers.forEach(el => {
        if(teacherSelect.value === el["name"]){
            emailInput.value = el["email"];
        }
    });
});

mainForm.addEventListener('submit', e => {
    e.preventDefault();
    emailjs.sendForm(service, template, mainForm);
});