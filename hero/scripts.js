var form = document.forms.hero;
form.addEventListener("submit", makeHero, false);

function makeHero(event) {
    event.preventDefault();
    var hero = {};

    hero.name = form.name.value;
    hero.realName = form.realName.value;
    hero.powers = [];
    for (i = 0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }

    for (i = 0; i <  form.type.length; i++) {
        if (form.type[i].checked) {
            hero.type = form.type[i].value;
            break;
        }
    }
    hero.city = form.city.value;
    hero.origin = form.origin.value;
    hero.age = form.age.value;

    alert(JSON.stringify(hero));
}

form.addEventListener("submit", validate, false);

function validate(event) {
    var firstLetter = form.name.value[0];
    var label = document.querySelector("label[for='name']");
    if (firstLetter.toUpperCase() === "X") {
        label.classList.add("error");
        label.textContent = "Your name is not allowed to start with X!";
    } else {
        label.class.List.remove("error");
        label.textContent = "Name";
    }
}

form.addEventListener("blur", validateInline, false);

function validateInline(event) {
    var firstLetter = form.name.value[0];
    var label = document.querySelector("label[for='name']");
    if (firstLetter.toUpperCase() === "X") {
        label.classList.add("error");
        label.textContent = "Your name is not allowed to start with X!";
    } else {
        label.classList.remove("error");
        label.textContent = "Name";
    }
}