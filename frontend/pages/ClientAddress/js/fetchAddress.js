window.addEventListener('load', () => {
  $('#cep').focusout(showAddress);
  
    
});

const showAddress = () => {
  $.ajax({
    url: 'https://viacep.com.br/ws/'+$('#cep').val()+'/json/unicode/',

    dataType: 'json'

  }).done(function(res){
      console.log(res);
      $('#logradouro').val(res.logradouro);
      $('#bairro').val(res.bairro);
      $('#cidade').val(res.localidade);
      $('#uf').val(res.uf);

      $('#numero').focus();

  });
}