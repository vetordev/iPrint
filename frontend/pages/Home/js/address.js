window.addEventListener('load', function(){
    $('#cep').focusout(function(){

        $.ajax({
            url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',

            dataType: 'json',

            success: function (res) {
                $('#log').val(res.logradouro);
                $('#bar').val(res.bairro);
            }
        });
        

    });
});


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