window.addEventListener('load', () => {
  const user_id = localStorage.getItem('user_id');
  const type = localStorage.getItem('type');

  fetchEmail(user_id, type);
});

const fetchEmail = (user_id, type) => {
  
  $.ajax({
    url : '../../../backend/ClientEmail/fetchEmail.php',
    type: 'post', 
    data : {
      id : user_id,
      type : type
    }
  }).done(function(res) {
      res = JSON.parse(res);
      $('#email-older').val(res.email);
  });  


}
