window.addEventListener('load', load => {

  const btnaddress = document.getElementById('btn-add-address')
  btnaddress.addEventListener('click', ch4Address);
  btnaddress.addEventListener('click', addAddress);
  


});

function ch4Address() {
  const user_id = localStorage.getItem('user_id');
  const type = localStorage.getItem('type');

  const cep11 = $('#cep').val();
  const logradouro = $('#logradouro').val();
  const numero = $('#numero').val();
  const bairro = $('#bairro').val();
  const cidade = $('#cidade').val();
  const uf = $('#uf').val();
  const complemento = $('#complemento').val();

  $.ajax({
    url : '../../../backend/ClientAddress/addAddress.php',
    type : 'post',
    data : {
      user_id : user_id,
      type : type,
      cep : cep11,
      logradouro : logradouro,
      numero : numero,
      bairro : bairro,
      cidade : cidade,
      uf : uf,
      complemento : complemento
  }
  }).done(res => {
    alert(res);
  });
}

