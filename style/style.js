const child = document.querySelector(".child");
const form = document.querySelector("form");
const slider = document.querySelector("#slider");
var init = document.getElementById("init");
var login = document.getElementById("login-screen");
var singScreen = document.getElementById("sign-screen");
var address = document.getElementById("address");
const email = document.getElementById("email");
var load = document.getElementById("load");

child.addEventListener("animationend", event => {
    if (event.animationName == "arising"){
        form.classList.add("separation-Form");
        slider.classList.add("separation-Slider");
    }
});

form.addEventListener("animationend", event => {
    if (event.animationName == "separationForm")
        email.focus();
})

email.addEventListener("keydown", event =>{
    load.style.display = "block";
})

const fields = [... document.querySelectorAll(".required-field")];

fields.forEach(field => {
    field.addEventListener("blur", event => {
        if (field.value == ""){
            field.classList.add("wrong-field");
            field.style.border = "3px solid rgba(255,0,0,0.8)";
        }else{
            field.style.border = "none";
        }
    });

});

