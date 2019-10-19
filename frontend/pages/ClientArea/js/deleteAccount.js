window.addEventListener('load', () => {
  $('.del-account').click(() => {
    const user_id = localStorage.getItem('user_id');
    const type = localStorage.getItem('type');
    deleteAccount(user_id, type)
  });
});

const deleteAccount = (user_id, type) => {
  $.ajax({
    url: '../../../backend/ClientArea/deleteAccount.php',
    type: 'post',
    data : {
      user_id : user_id,
      type : type
    }
  }).done(res => {
    try {
      res = JSON.parse(res);
      if(res === "ok"){
        // localStorage.clear();
        // window.location.href = "../Home/"
        alert('deu certo cachorro');

      }
    }catch{
      alert(res);
    }
  });
}