window.addEventListener('load', load => {
  const user_id = localStorage.getItem('user_id');
  const type = localStorage.getItem('type');

  $.ajax({
    url: '../../../backend/ClientAccount/fetchData.php',
    type: 'post',
    data : {
      user_id : user_id,
      type : type
    }
  }).done(res => {
    try {
      res = JSON.parse(res);
      setInputData(res);
    } catch (error) {
      alert(res);
    }
  });
});

const setInputData = res => {
  if(localStorage.getItem('type') == 'physical'){
    $('#email').val(res.email);
    $('#name').val(res.nome);
    $('#cpf').val(res.cpf);
    $('#ddn').val(res.ddn);
    $('#telefone').val(res.telefone);
  }else{
    $('#email').val(res.email);
    $('#cnpj').val(res.cnpj);
    $('#rs').val(res.rs);
    $('#name-f').val(res.nomeF);
    $('#ie').val(res.ie);
    $('#name-e').val(res.nomeR);
    $('#telefone-cel').val(res.telCel);
    $('#telefoneR').val(res.telResid);
    $('#telefoneCom').val(res.telComerc);
  }
  
}