"use strict";

const form = document.querySelector("#form");
const userName = document.querySelector("#userName");
const userSurname = document.querySelector("#userSurname");
const goal = document.querySelector("#goal");
const otherBox = document.querySelector("#otherBox");
const otherReason = document.querySelector("#otherReason");
const teachersSelect = document.querySelector("#teachers");

// sudedam mokytojus i select
for (let i = 0; i < teachers.length; i++) {
  const option = document.createElement("option");
  option.value = teachers[i].name;
  option.textContent = teachers[i].name;
  teachersSelect.appendChild(option);
}

// jei pasirenka "kita" rodom textareaa
goal.addEventListener("change", () => {
  if (goal.value === "Kita") {
    otherBox.style.display = "block";
  } else {
    otherBox.style.display = "none";
    otherReason.value = "";
  }
});

// pagal pasirinkta zmogu irasom jo email
teachersSelect.addEventListener("change", () => {
  data.email = teachers.find((el) => el.name == teachersSelect.value).email;
});

// formos siuntimas/validacija
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (userName.value.trim() === "") {
    // trim pasalina tarpus gale ir pradzioj
    createErrorMessage("Įvesk vardą");
    return;
  }

  if (/\d/.test(userName.value)) {
    // "/\d/" tikrina ar yra ivestas skaicius
    createErrorMessage("Varde negali būti skaičių");
    return;
  }

  if (userSurname.value.trim() === "") {
    createErrorMessage("Įvesk pavardę");
    return;
  }

  if (/\d/.test(userSurname.value)) {
    createErrorMessage("Pavardėje negali būti skaičių");
    return;
  }

  if (goal.value === "") {
    createErrorMessage("Pasirink vizito tikslą");
    return;
  }

  if (goal.value === "Kita" && otherReason.value.trim() === "") {
    createErrorMessage("Įrašyk savo priežastį");
    return;
  }

  if (teachersSelect.value === "") {
    createErrorMessage("Pasirink žmogų");
    return;
  }

  data.firstName = userName.value.trim();
  data.lastName = userSurname.value.trim();
  data.goal = otherReason.value.trim() ? otherReason.value.trim() : goal.value;
  data.addressee = teachersSelect.value;

  pageForward();
  sendEmail();
});
