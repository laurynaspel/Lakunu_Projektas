"use strict";

const languageButtons = [...document.querySelectorAll("#langButton")];

const dict = [
  {
    LT: "Sveiki atvykę",
    EN: "Welcome",

  },
  {
    LT: "Pradėti registraciją",
    EN: "Start registration",

  },
  {
    LT: "Lankytojo registracija",
    EN: "Visitor Registration"
  },
  {
    LT: "Vardas",
    EN: "Name",

  },
  {
    LT: "Pavardė",
    EN: "Last name",
  },
  {
    LT: "Vizito tikslas",
    EN: "The purpose of visit",
  },
  {
    LT: "Vizitas pas",
    EN: "Who did you come to visit",
  },
  {
    LT: "Tęsti",
    EN: "Continue",
  },
  {
    LT: "Atgal",
    EN: "Back",
  },
  {
    LT: "Dėl mokslų",
    EN: "For studies"
  },
  {
    LT: "Dėl dokumentų",
    EN: "For documents"
  },
  {
    LT: "Konsultacijai",
    EN: "For consultation"
  },
  {
    LT: "Suderintas vizitas",
    EN: "Planned visit"
  },
  {
    LT: "Kita",
    EN: "Other"
  },
  {
    LT: "Įrašyk priežastį",
    EN: "Enter the reason"
  },
  {
    LT: "Kelio nurodymai",
    EN: "Directions"
  },
  {
    LT: "Baigti",
    EN: "Finish"
  },
  {
    LT: "Registracija sėkminga!",
    EN: "Registration successful!"
  },
  {
    LT: "Darbuotojas informuotas apie Jūsų atvykimą",
    EN: "The worker is notified about your visit"
  },
  {
    LT: "Sausis",
    EN: "January"
  },
  {
    LT: "Vasaris",
    EN: "February"
  },
  {
    LT: "Kovas",
    EN: "March"
  },
  {
    LT: "Balandis",
    EN: "April"
  },
  {
    LT: "Gegužė",
    EN: "May"
  },
  {
    LT: "Birželis",
    EN: "June"
  },
  {
    LT: "Liepa",
    EN: "July"
  },
  {
    LT: "Rugpjūtis",
    EN: "August"
  },
  {
    LT: "Rugsėjis",
    EN: "September"
  },
  {
    LT: "Spalis",
    EN: "October"
  },
  {
    LT: "Lapkritis",
    EN: "November"
  },
  {
    LT: "Gruodis",
    EN: "December"
  }
];


let languageNow = "LT";
let firstClick = true;

function changeButtonBackground() {
  languageButtons.forEach((el) => {
    if (el.textContent == languageNow) el.classList.add("active");
    else el.classList.remove("active");
  });
}

function changeMonthsLang() {
  let activeButton = languageButtons.find(el => el.textContent !== languageNow);
  months.forEach((element, i) => {
    let monthObjNow = dict.find((el) => el[languageNow] === element);


    if (monthObjNow && !activeButton.classList.contains("active")) {
      months[i] = languageNow == "LT" ? monthObjNow.EN : monthObjNow.LT;

    }
  })
  changeTime();

}

function changeLanguage() {
  const htmlElements = document.querySelector("body").querySelectorAll("*");
  htmlElements.forEach((element) => {
    let dictObjNow = dict.find((el) => el[languageNow] === element.textContent);
    if (dictObjNow) {
      element.textContent = languageNow == "LT" ? dictObjNow.EN : dictObjNow.LT;
    }
  });
}

languageButtons.forEach((el) =>
  el.addEventListener("click", () => {
    if (!(el.classList.contains("active"))) {
      changeLanguage();
      changeMonthsLang();
      languageNow = el.textContent;
      changeButtonBackground();
    }

  }),
);
