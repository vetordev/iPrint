window.addEventListener('load', load => {
  
  const user_id = localStorage.getItem('user_id');
  const type = localStorage.getItem('type');

  $.ajax({
    url: '../../../backend/ClientArea/fetchData.php',
    type: 'post',
    data: {
      user_id : user_id,
      type : type
    }
  }).done(res => {
    res = JSON.parse(res);
    $('#username').html(res.nome);
    $('#useremail').html(res.email);
    $('#usertel').html(res.telefone)
  });
});