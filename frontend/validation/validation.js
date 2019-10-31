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

window.onload = function onload() {
const fields = [... document.querySelectorAll(".required-field")];      
fields.forEach(field => {
    field.addEventListener("blur", event => {

        /* CAMPOS VAZIOS */
        if (field.value == ""){
            field.classList.add("wrong-field");
            field.style.border = "3px solid rgba(255,0,0,0.8)";
        }else{
            field.style.border = "1px solid #ddd";
            
            /* ENDEREÇOS DIFERENTES*/
            if (((field.id == "email2") != (field.id == "email1")) && ((field.id == "email2") != "")){ 
                alert('Os e-mails não conferem.');
                field.style.border = "3px solid rgba(255,0,0,0.8)";
            }
        }


        /**/
    });

});
}