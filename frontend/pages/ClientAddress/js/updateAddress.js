window.addEventListener('load', load =>{



});
function updateAddress(id_end) {
    const cep = $('#cep').val();
    const logradouro = $('#logradouro').val();
    const numero = $('#numero').val();
    const bairro = $('#bairro').val();
    const cidade = $('#cidade').val();
    const uf = $('#uf').val();
    const complemento = $('#complemento').val();
    const user_id = localStorage.getItem('user_id');
    const type = localStorage.getItem('type');

    $.ajax({
      url: '../../../backend/ClientAddress/updateAddress.php',
      type: 'post',
      data : {
        cep : cep,
        logradouro : logradouro,
        numero : numero,
        bairro : bairro,
        cidade : cidade,
        estado : uf,
        complemento : complemento,
        user_id : user_id,
        type : type,
        address_id : id_end
      }

    }).done(res =>{
      try {
        res = JSON.parse(res);
        alert(res);
      } catch (error) {
        alert(res);
      }
    });
}