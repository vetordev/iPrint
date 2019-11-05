function mascaraData(campoData){
    alert(campoData.value);
    var data = campoData.value;
    if (data.length == 2){
        data += '/';
        // document.forms[0].data.value = data;
return true;              
    }
    if (data.length == 5){
        data = data + '/';
        document.forms[0].data.value = data;
        return true;
    }
}

var stateEmail = 0;
window.onload = function onload() {
const fields = [... document.querySelectorAll(".required-field")];
var email1 = document.getElementById("email1");
var email2 = document.getElementById("email2");
var ddn = document.getElementById("ddn");
var senha1 = document.getElementById("newer-pass");
var senha2 = document.getElementById("newer-pass2");


fields.forEach(field => {
    field.addEventListener("blur", event => {

        /* CAMPOS VAZIOS */
        if (field.value == ""){
            field.classList.add("wrong-field");
            field.style.border = "3px solid rgba(255,0,0,0.8)";
        }else{
            field.style.border = "1px solid #ddd";
            
            /* EMAILS DIFERENTES*/
            if (email1.value != email2.value && email1.value != "" && email2.value != ""){
                    alert('Os e-mails não conferem.');
                email1.style.border = "3px solid rgba(255,0,0,0.8)";
                email2.style.border = "3px solid rgba(255,0,0,0.8)";
            }
            if (senha1.value != senha2.value && senha1.value != "" && senha2.value != ""){
                alert('Os e-mails não conferem.');
                senha1.style.border = "3px solid rgba(255,0,0,0.8)";
                senha2.style.border = "3px solid rgba(255,0,0,0.8)";
            }
            
            /* SENHAS DIFERENTES */
            // if (){}
        }
    });
});
}

function save () {
    const fields = [... document.querySelectorAll(".required-field")];
    fields.forEach(field => {
        /* CASO HAJAM CAMPOS ERRADOS */
        if (field.style.border == "3px solid rgba(255, 0, 0, 0.8)"){
            alert("Preencha todos os campos corretamente.");
            break;
            return false;
        }
        if (field.value == "") return false;
        else alert("Dados salvos com sucesso.");
    }
)}