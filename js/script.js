var init = document.getElementById("init");
var login = document.getElementById("login-screen");
var singScreen = document.getElementById("sign-screen");
var address = document.getElementById("address");

function searchEmail(){
    const email = $("#email").val();
    var exists;
    //Realizar busca no banco de dados para verificar se o email existe
 
    if (email != ""){

        // Informações iniciais somem
        init.style.display = "none";
        //Ajax 
        $.ajax({
            url : './php/searchEmail.php',
            type: 'post',
            data: {
                email : email
            }
        }).done(function(res){
            res = JSON.parse(res);
            exists = res.exists;
            //exists = 1 TRUE
            //exists = 0 FALSE
            if (exists == '0'){
                login.style.display = "none";
                singScreen.style.display = "block";
            }else{
                
                singScreen.style.display = "none";
                login.style.display = "block";
                $("user").html(res.name);
            }
        });

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
    //ajax para buscar as informaçõe de endereço
    $.ajax({
        url: 'https://viacep.com.br/ws/'+$('#cep').val()+'/json/unicode/',

        dataType: 'json'

    }).done(function(res){
        console.log(res);
        $('[name=logradouro]').val(res.logradouro);
        $('[name=bairro]').val(res.bairro);
        $('[name=cidade]').val(res.localidade);
        $('[name=uf]').val(res.uf);

    });

    var objDiv = $("#sign-screen");
    

    $('#sign-screen').animate({scrollTop: objDiv.scrollHeight}, "low");

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

function registerClient() {

    //Verificar se as senhas são iguais

    const name = $('#namePF').val();
    const email = $("#email").val();
    const senha = $('#password2').val();
    const cpf = $('#cpf').val();
    const ddn = $('#ddn').val();
    const logradouro = $('[name=logradouro]').val();
    const numero = $('[name=numero]').val();
    const complemento = $('[name=complemento]').val();
    const bairro = $('[name=bairro]').val();
    const cidade = $('[name=cidade]').val();
    const uf = $('[name=uf]').val();
    const cep = $('#cep').val();
    
    const telefone = $('[name=telefone]').val();

    
    $.ajax({
        url : './php/registerClientPhysical.php',
        type: 'post',

        data : {
            name : name,
            email : email,
            senha : senha,
            cpf : cpf,
            ddn : ddn,
            logradouro : logradouro,
            numero : numero,
            complemento : complemento,
            bairro : bairro,
            cidade : cidade,
            uf : uf,
            cep : cep,
            numero : numero,
            telefone : telefone
        }
    }).done(function (res) {
        alert(res);
    });

}



