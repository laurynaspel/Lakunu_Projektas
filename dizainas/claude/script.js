// ========================
// CLOCK & DATE
// ========================

function updateClock() {
    var now = new Date();

    var days = ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"];
    var months = ["Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"];

    var dayName = days[now.getDay()];
    var monthName = months[now.getMonth()];
    var date = now.getDate();

    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');

    // Left panel (screen 1)
    var dateEl = document.getElementById('dateDisplay');
    var timeEl = document.getElementById('timeDisplay');
    if (dateEl) dateEl.textContent = dayName + ', ' + monthName + ' ' + date;
    if (timeEl) timeEl.textContent = hours + ':' + minutes;

    // Header clock (screens 2,3,4)
    var headerClock = document.getElementById('headerClock');
    if (headerClock) headerClock.textContent = hours + ':' + minutes;
}

updateClock();
setInterval(updateClock, 1000);


// ========================
// DARK / LIGHT MODE
// ========================

function toggleTheme() {
    var isDark = document.documentElement.classList.toggle('dark');
    document.getElementById('themeToggle').textContent = isDark ? '☀️' : '🌙';

    // Swap header logo: dark mode = green logo, light mode = dark logo (inverted to white via CSS filter)
    var headerLogo = document.getElementById('headerLogo');
    var leftLogo = document.getElementById('leftLogo');

    if (isDark) {
        if (headerLogo) headerLogo.src = 'CSS/Techin_light.webp';
        if (leftLogo) leftLogo.src = 'CSS/Techin_light.webp';
    } else {
        if (headerLogo) headerLogo.src = 'CSS/Techin_dark.webp';
        if (leftLogo) leftLogo.src = 'CSS/Techin_dark.webp';
    }
}


// ========================
// SCREEN NAVIGATION
// ========================

function goTo(n) {
    // Hide all screens
    var screens = document.querySelectorAll('.screen');
    for (var i = 0; i < screens.length; i++) {
        screens[i].classList.remove('active');
    }

    // Show the chosen screen
    document.getElementById('screen' + n).classList.add('active');

    // Show/hide header (screen 1 has no header)
    var header = document.querySelector('header');
    if (n === 1) {
        header.style.display = 'none';
    } else {
        header.style.display = 'flex';
    }
}

// Hide header on start (screen 1 has its own layout)
document.querySelector('header').style.display = 'none';


// ========================
// FORM: show "other" field
// ========================

function checkOther() {
    var purpose = document.getElementById('purpose').value;
    var otherField = document.getElementById('otherField');

    if (purpose === 'other') {
        otherField.style.display = 'flex';
    } else {
        otherField.style.display = 'none';
    }
}


// ========================
// FORM: validate & submit
// ========================

function submitForm() {
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var purpose = document.getElementById('purpose').value;
    var employee = document.getElementById('employee').value;
    var otherText = document.getElementById('otherText').value.trim();
    var error = document.getElementById('formError');

    if (!firstName) {
        error.textContent = 'Įveskite vardą.';
        return;
    }
    if (!lastName) {
        error.textContent = 'Įveskite pavardę.';
        return;
    }
    if (!purpose) {
        error.textContent = 'Pasirinkite apsilankymo tikslą.';
        return;
    }
    if (purpose === 'other' && !otherText) {
        error.textContent = 'Patikslinkite apsilankymo tikslą.';
        return;
    }
    if (!employee) {
        error.textContent = 'Pasirinkite darbuotoją.';
        return;
    }

    error.textContent = '';
    goTo(3);
}


// ========================
// RESET (back to screen 1)
// ========================

function resetAll() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('purpose').value = '';
    document.getElementById('employee').value = '';
    document.getElementById('otherText').value = '';
    document.getElementById('otherField').style.display = 'none';
    document.getElementById('formError').textContent = '';
    goTo(1);
}


// ========================
// LANGUAGE SWITCH
// ========================

var currentLang = 'lt';

function setLang(lang) {
    currentLang = lang;

    // Update active button style
    var btns = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active');
    }
    document.querySelector('.lang-btn[onclick="setLang(\'' + lang + '\')"]').classList.add('active');

    // Update all text elements with data-lt / data-en attributes
    var elements = document.querySelectorAll('[data-lt]');
    for (var i = 0; i < elements.length; i++) {
        elements[i].textContent = elements[i].getAttribute('data-' + lang);
    }
}
