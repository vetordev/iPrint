// function mascaraData(campoData){
//     alert(campoData.value);
//     var data = campoData.value;
//     if (data.length == 2){
//         data += '/';
//         // document.forms[0].data.value = data;
// return true;              
//     }
//     if (data.length == 5){
//         data = data + '/';
//         document.forms[0].data.value = data;
//         return true;
//     }
// }

var stateEmail = 0;
window.addEventListener('load', function(){
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
            // if (email1.value != email2.value && email1.value != "" && email2.value != ""){
            //         alert('Os e-mails não conferem.');
            //     email1.style.border = "3px solid rgba(255,0,0,0.8)";
            //     email2.style.border = "3px solid rgba(255,0,0,0.8)";
            // }
            // if (senha1.value != senha2.value && senha1.value != "" && senha2.value != ""){
            //     alert('Os e-mails não conferem.');
            //     senha1.style.border = "3px solid rgba(255,0,0,0.8)";
            //     senha2.style.border = "3px solid rgba(255,0,0,0.8)";
            // }
            
            /* SENHAS DIFERENTES */
            // if (){}
        }
    });
});
})

const justLetters = [... document.querySelectorAll('.just-letters')];
justLetters.forEach(jL => {
    jL.addEventListener('keydown', event => {
        $(jL).keypress(function(e) {
            var keyCode = (e.keyCode ? e.keyCode : e.which); // Variar a chamada do keyCode de acordo com o ambiente.
            if (keyCode > 47 && keyCode < 58) {
              e.preventDefault();
            }
          });
    })
})

const justNumbers = [... document.querySelectorAll('.just-numbers')];
justNumbers.forEach(jN => {
    jN.addEventListener('keydown', event => {
        $(jN).keypress(function(e) {
            var keyCode = (e.keyCode ? e.keyCode : e.which); // Variar a chamada do keyCode de acordo com o ambiente.
            if (!(keyCode > 47 && keyCode < 58)) {
              e.preventDefault();
            }
          });
    })
})




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



function fMasc(objeto,mascara) {
    obj=objeto
    masc=mascara
    setTimeout("fMascEx()",1)
}
function fMascEx() {
    obj.value=masc(obj.value)
}
function mTel(tel) {
    tel=tel.replace(/\D/g,"")
    tel=tel.replace(/^(\d)/,"($1")
    tel=tel.replace(/(.{3})(\d)/,"$1)$2")
    if(tel.length == 9) {
        tel=tel.replace(/(.{1})$/,"-$1")
    } else if (tel.length == 10) {
        tel=tel.replace(/(.{2})$/,"-$1")
    } else if (tel.length == 11) {
        tel=tel.replace(/(.{3})$/,"-$1")
    } else if (tel.length == 12) {
        tel=tel.replace(/(.{4})$/,"-$1")
    } else if (tel.length > 12) {
        tel=tel.replace(/(.{4})$/,"-$1")
    }
    return tel;
}
function mCNPJ(cnpj){
    cnpj=cnpj.replace(/\D/g,"")
    cnpj=cnpj.replace(/^(\d{2})(\d)/,"$1.$2")
    cnpj=cnpj.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
    cnpj=cnpj.replace(/\.(\d{3})(\d)/,".$1/$2")
    cnpj=cnpj.replace(/(\d{4})(\d)/,"$1-$2")
    return cnpj
}
function mCPF(cpf){
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
}
function mCEP(cep){
    cep=cep.replace(/\D/g,"")
    cep=cep.replace(/^(\d{2})(\d)/,"$1.$2")
    cep=cep.replace(/\.(\d{3})(\d)/,".$1-$2")
    return cep
}
function mNum(num){
    num=num.replace(/\D/g,"")
    return num
}
function numCas()
{
    // alert('a');
    var str = document.getElementsByName('numero')[0].value;
    var sub = str.replace(/[^\d]+/g,'');
    str = sub;

}
function VerificaCPF (cpf) {
    alert('a');
    if (vercpf(cpf)) 
    {return true;}else 
    {errors="1";if (errors) alert('CPF NÃO VÁLIDO');
    document.retorno = (errors == '');}}

function vercpf (cpf) {
var texto =  cpf;
var er = /[^a-z0-9]/gi;
texto = texto.replace(er, "");
console.log(texto);

    cpf = texto;
    

if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999")
return false;
add = 0;
for (i=0; i < 9; i ++)
add += parseInt(cpf.charAt(i)) * (10 - i);
rev = 11 - (add % 11);
if (rev == 10 || rev == 11)
rev = 0;
if (rev != parseInt(cpf.charAt(9)))
return false;
add = 0;
for (i = 0; i < 10; i ++)
add += parseInt(cpf.charAt(i)) * (11 - i);
rev = 11 - (add % 11);
if (rev == 10 || rev == 11)
rev = 0;
if (rev != parseInt(cpf.charAt(10)))
return false;
alert('O CPF INFORMADO É VÁLIDO.');return true;
    }