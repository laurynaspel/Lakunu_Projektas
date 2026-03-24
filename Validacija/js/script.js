'use strict';

const service = 'service_vdqpt0p';
const template = 'template_w5ljwey';

emailjs.init({
    publicKey: '1YhF3v6TzDCHj2lR9'
});

const form = document.querySelector('#form');
const userName = document.querySelector('#userName');
const userSurname = document.querySelector('#userSurname');
const goal = document.querySelector('#goal');
const otherBox = document.querySelector('#otherBox');
const otherReason = document.querySelector('#otherReason');
const teachersSelect = document.querySelector('#teachers');
const email = document.querySelector('#email');

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

const visitData = {};

// sudedam mokytojus i select
for (let i = 0; i < teachers.length; i++) {
    const option = document.createElement('option');
    option.value = teachers[i].name;
    option.textContent = teachers[i].name;
    teachersSelect.appendChild(option);
}

// jei pasirenka "kita" rodom textareaa
goal.addEventListener('change', function () {
    if (goal.value === 'Kita') {
        otherBox.style.display = 'block';
    } else {
        otherBox.style.display = 'none';
        otherReason.value = '';
    }
});

// pagal pasirinkta zmogu irasom jo email
teachersSelect.addEventListener('change', function () {
    for (let i = 0; i < teachers.length; i++) {
        if (teachersSelect.value === teachers[i].name) {
            email.value = teachers[i].email;
        }
    }
});

// formos siuntimas/validacija
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (userName.value.trim() === '') { // trim pasalina tarpus gale ir pradzioj
        alert('Įvesk vardą');
        return;
    }

    if (/\d/.test(userName.value)) { // "/\d/" tikrina ar yra ivestas skaicius
        alert('Varde negali būti skaičių');
        return;
    }

    if (userSurname.value.trim() === '') {
        alert('Įvesk pavardę');
        return;
    }

    if (/\d/.test(userSurname.value)) {
        alert('Pavardėje negali būti skaičių');
        return;
    }

    if (goal.value === '') {
        alert('Pasirink vizito tikslą');
        return;
    }

    if (goal.value === 'Kita' && otherReason.value.trim() === '') {
        alert('Įrašyk savo priežastį');
        return;
    }

    if (teachersSelect.value === '') {
        alert('Pasirink žmogų');
        return;
    }

    visitData.userName = userName.value.trim();
    visitData.userSurname = userSurname.value.trim();
    visitData.goal = goal.value;
    visitData.otherReason = otherReason.value.trim();
    visitData.teacherName = teachersSelect.value;
    visitData.email = email.value;

    console.log(visitData);

    emailjs.sendForm(service, template, form).then(function () {
            alert('Forma išsiųsta');
            form.reset();
            otherBox.style.display = 'none';
        })
        .catch(function () {
            alert('Nepavyko išsiųsti formos');
        });
});