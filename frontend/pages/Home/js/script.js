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

aux = 0;
const wishIco = [... document.querySelectorAll(".wish-ico")];

wishIco.forEach(ico => {
	ico.addEventListener('click', event => {

		var productName = ico.parentNode.children[2].children[0].children[0].innerHTML;
		alert(productName)
		const data = {
			product: productName
		}

		if (aux == 0) {
			ico.classList.remove('far');
			ico.classList.add('fas');
			aux = 1;

			storeWishlist(data);			
		}else {
			ico.classList.remove('fas');
			ico.classList.add('far');
			aux = 0;

			destroyWishlist(data);
		}

	})
})



// 
// var cardp = [... document.querySelectorAll('.cardp')];
// cardp.forEach(card => {
//     card.addEventListener('mouseover', event => {
// 		const wishIco = [... document.querySelectorAll('.wish-ico')];
// 			wishIco.forEach(ico => {
// 				ico.style.visibility = 'visible';
// 			})
//     })
// })


// wishIco.forEach(ico => {
//     ico.addEventListener('hover', event => {
//         alert('oi');
//     })
// })