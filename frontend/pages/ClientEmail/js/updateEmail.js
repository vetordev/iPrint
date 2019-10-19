window.addEventListener('load', load => {
  $('#btn-save').click(click => {
    updateEmail();
  });
})

const updateEmail = () => {
  
  const oldemail = $('#email-older').val();
  const newemail = $('#email2').val();
  const password = $('#password').val();

  const user_id = localStorage.getItem('user_id');
  const type = localStorage.getItem('type');
  
  $.ajax({
    url: '../../../backend/ClientEmail/updateEmail.php',
    type: 'post',
    data : {
      newemail : newemail,
      password : password,
      oldemail : oldemail,
      user_id : user_id,
      type : type,
    }
  }).done(function(res) {
    res = JSON.parse(res);    
    
    if (res == 'email ou senha incorretos'){
      // ...   
      alert(res);  
    }
    if(res == 'email em uso'){
      alert(res);  
    }
    if(res == 'ok'){
      window.location.href = './index.html';
    }
  });
}