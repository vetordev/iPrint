const child = document.querySelector(".child");
const form = document.querySelector("form");
const slider = document.querySelector("#slider");

child.addEventListener("animationend", event => {
    if (event.animationName == "arising"){
        form.classList.add("separation-Form");
        slider.classList.add("separation-Slider");
    }
});