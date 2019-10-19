window.addEventListener('load', load => {

  const user_id = localStorage.getItem('user_id');
  const type = localStorage.getItem('type');

  $.ajax({
    url: '../../../backend/ClientAddress/loadAddress.php',
    type: 'post',
    data: {
      user_id : user_id,
      type : type
    }
  }).done(res => {
    res = JSON.parse(res);
    
    loadAddresses(res);
  });

});

