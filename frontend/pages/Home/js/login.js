window.addEventListener('load', () => {
  $('#btn-facebook').click(loginWithFacebook);
})

function loginWithFacebook() {
  $.ajax({
    url : '../../../backend/Facebook'
  })
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
      url : '../../../backend/Home/registerClientPhysical.php',
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
    try {
      res = JSON.parse(res);
      localStorage.setItem('type', 'physical');
      localStorage.setItem('user_id', res.id);
      filterHidden();
    } catch (error) {
      console.log(res);
    }

      
  });

} else {
  const cnpj = $('#cnpj').val();
  const rs = $('#rs').val();
  const nameF = $('#name-f').val();
  const ie = $('#ie').val();
  const name = $('#namePJ').val();
  const senha = $('#password2PJ').val();
  const telefoneCelular = $('#telefone').val();
  const telefoneResidencial = $('#telefoneR').val();
  const telefoneComercial = $('#telefoneCom').val();

  $.ajax({
    url : '../../../backend/Home/registerClientLegal.php',
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
      telCel : telefoneCelular,
      telResid : telefoneResidencial,
      telComerc : telefoneComercial
    }
  }).done(function(res) {
    try {
      res = JSON.parse(res);
      localStorage.setItem('type', 'legal');
      localStorage.setItem('user_id', res.id);
      filterHidden(); 
    } catch (error) {
      console.log(res);
    }

  });
}
  
}
function signIn(){
  const email = $('#email').val();
  const senha = $('#password').val();

  $.ajax({
      url : '../../../backend/Home/signInClient.php',
      type: 'post',

      data: {
          email : email,
          senha : senha
      }
      
  }).done(function(res){
      try {
        res = JSON.parse(res);
        if (res.id != '0'){
          localStorage.setItem('type', res.type);
          localStorage.setItem('user_id', res.id);
          window.location.href = "../ClientArea/";
        }
      //se retornar 0 a senha está incorreta
      //...
      } catch (error) {
        console.log(res);
      }
      
  });
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
          url : '../../../backend/Home/searchEmail.php',
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
      }
   });
      
      
$.ajax({
    url : '../../../backend/Home/searchEmail.php',
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
    singScreen.style.display = "none";
    login.style.display = "none";
    init.style.display = "block";
  }
}