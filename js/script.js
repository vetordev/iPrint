var init = document.getElementById("init");
var login = document.getElementById("login-screen");
var singScreen = document.getElementById("sign-screen");
var address = document.getElementById("address");

function countTime(){
    const email = document.getElementById("email");

    if (email.value != ""){
        init.style.display = "none";
        if (email.value != "heyvitoria.lopes@gmail.com"){
            login.style.display = "none";
            singScreen.style.display = "block";
        }else{   
            singScreen.style.display = "none";
            login.style.display = "block";
        }
    }
}

function cpfValidate(){
    var cpf = document.getElementById("cpf");
    var span = document.getElementById("span-invalid");

    if (cpf.value != "vitorinha"){
        span.innerHTML = cpf.id.toUpperCase() + " inválido";
    }
}

function showAddress(){
    singScreen.style.overflow = "auto";
    address.style.display = "block";

}

function radioCheck(option){
    var formPhy = document.getElementById("form-physical");
    var formLeg = document.getElementById("form-legal");

    address.style.display = "none";
    if (option == "juridica"){
        formPhy.style.display = "none";
        formLeg.style.display = "block";
        singScreen.style.overflow = "auto";
        
    }else{
        singScreen.style.overflow = "none";
        formPhy.style.display = "block";
        formLeg.style.display = "none";
    } 
}
const fields = [... document.querySelectorAll(".field")];

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



