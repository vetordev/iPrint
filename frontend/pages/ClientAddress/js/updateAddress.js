window.addEventListener('load', load =>{


  const btnEdit = document.getElementById('btn-edit-address');
  btnEdit.addEventListener('click', saveEditions);
  btnEdit.addEventListener('click', () => {
    const cep = $('#cep').val();
    const logradouro = $('#logradouro').val();
    const numero = $('#numero').val();
    const bairro = $('#bairro').val();
    const cidade = $('#cidade').val();
    const uf = $('#uf').val();
    const complemento = $('#complemento').val();
    const user_id = localStorage.getItem('user_id');
    const type = localStorage.getItem('type');

    updateAddress(cep, logradouro, numero, bairro, cidade, uf, complemento, user_id, type);
  });

});

const updateAddress = (cep, logradouro, numero, bairro, cidade, estado, complemento, user_id, type) => {
  $.ajax({
    url: '../../../backend/ClientAddress/updateAddress.php',
    type: 'post',
    data: {
      cep : cep,
      logradouro : logradouro,
      numero : numero,
      bairro : bairro,
      cidade : cidade,
      estado : estado,
      complemento : complemento,
      user_id : user_id,
      type : type
    }
  }).done(res => {
    alert(res);
  });
} 