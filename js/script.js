var init = document.getElementById("init");
var login = document.getElementById("login-screen");
var singScreen = document.getElementById("sign-screen");
var address = document.getElementById("address");
var option;

function cpfValidate(){
    var cpf = $('#cpf').val();
    cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return alert ('invalido')
	return alert ('valido')
}

function showAddress(){
    singScreen.style.overflow = "auto";
    address.style.display = "block";

    $("#sign-screen").animate({scrollTop: $("#sign-screen").height()+170}, 2000);

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

}

function radioCheck(option_){
    var formPhy = document.getElementById("form-physical");
    var formLeg = document.getElementById("form-legal");
    var telLeg = document.getElementById("legal-tel");
    var telCel = document.getElementById("telefone");
    option = option_;
    var fields = [... document.querySelectorAll(".field")]
    fields.forEach(field =>{
        if(field.id != 'email'){
            field.value = "";
        }
        
    })
    var wrongFields = [... document.querySelectorAll(".wrong-field")];
    wrongFields.forEach(wrongf => {
        wrongf.classList.remove("wrong-field");
        wrongf.style.border = "none";
    })

    address.style.display = "none";
    if (option == "juridica"){
        formPhy.style.display = "none";
        formLeg.style.display = "block";
        singScreen.style.overflow = "auto";
        telLeg.style.display = "block";
        telCel.placeholder = "Telefone celular";
        
    }else{
        singScreen.style.overflow = "hidden";
        formPhy.style.display = "block";
        formLeg.style.display = "none";
        telLeg.style.display = "none";
        telCel.placeholder = "Telefone";
    } 
}
function searchEmail(){
    const email = $('#email').val();

    var wrongFields = [... document.querySelectorAll(".wrong-field")];
    wrongFields.forEach(wrongf => {
        wrongf.classList.remove("wrong-field");
        wrongf.style.border = "none";
    });

    if (email != ""){
        init.classList.add("init-fade");
        load.style.display = "none";   
        init.addEventListener("animationend", event => {
            if (event.animationName == "fade"){
                init.style.display = "none";

                // IR PARA CADASTRO
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
                            
                        singScreen.classList.add("form-show");
                        init.classList.remove("init-fade");
                    }else{
                        
                        singScreen.style.display = "none";
                        login.style.display = "block";
        
                        login.classList.add("form-show");
                        init.classList.remove("init-fade");
                        $("user").html(res.name);
                    }
                });
                var wrongFields = [... document.querySelectorAll(".wrong-field")];
                wrongFields.forEach(wrongf => {
                wrongf.classList.remove("wrong-field");
                wrongf.style.border = "none";
        });
            }
        });
        
        
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
                init.style.display = "none";
                login.style.display = "none";
                singScreen.style.display = "block";
                    
                singScreen.classList.add("form-show");
                init.classList.remove("init-fade");
            }else{
                init.style.display = "none";
                singScreen.style.display = "none";
                login.style.display = "block";

                login.classList.add("form-show");
                init.classList.remove("init-fade");
                $("user").html(res.name);
            }
        });
       
    }else{
        load.style.display = "none";
    }
}
function registerClient() {

    const logradouro = $('[name=logradouro]').val();
    const numero = $('[name=numero]').val();
    const complemento = $('[name=complemento]').val();
    const bairro = $('[name=bairro]').val();
    const cidade = $('[name=cidade]').val();
    const uf = $('[name=uf]').val();
    const cep = $('#cep').val();
    const email = $("#email").val();

    //Verificar se as senhas são iguais
    if (!(option == 'juridica')){
        const name = $('#namePF').val();
        const senha = $('#password2PF').val();
        const cpf = $('#cpf').val();
        const ddn = $('#ddn').val();
    
        
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
            // alert(res);
        
        });
    } else {
        const cnpj = $('#cnpj').val();
        const rs = $('#rs').val();
        const nameF = $('#name-f').val();
        const ie = $('#ie').val();
        const name = $('#namePJ').val();
        const senha = $('#password2PJ').val();

        $.ajax({
            url : './php/registerClientLegal.php',
            type: 'post', 
            data : {
                cnpj : cnpj,
                rs : rs,
                nameF : nameF,
                ie : ie,
                name : name,
                email : email,
                senha : senha,
                logradouro : logradouro,
                numero : numero,
                complemento : complemento,
                bairro : bairro,
                cidade : cidade,
                uf : uf,
                cep : cep,
                numero : numero,
                // telefone : telefone
            }
        }).done(function(res) {
            // alert(res);
        });
    }
    

}
function signIn(){
    const email = $('#email').val();
    const senha = $('#password').val();

    $.ajax({
        url : './php/signInClient.php',
        type: 'post',

        data: {
            email : email,
            senha : senha
        }
        
    }).done(function(res){
        res = JSON.parse(res);
        alert(res.id);
    });
}
// BLOQUEAR ENTRADA DE CARACTERES != DE NUMÉRICOS
const wordField = [... document.querySelectorAll(".word-field")];
var nums = [0,1,2,3,4,5,6,7,8,9]

wordField.forEach(wfields => {
    wfields.addEventListener("keypress", event => {
        var key = event.key;
        nums.forEach(num => {
            if (key == num) event.preventDefault();
        })
    })
})