window.addEventListener('load', () => {
 
});

function excludeAddress(id_end) {
<<<<<<< HEAD
  $.ajax({
    url : '../../../backend/ClientAddress/deleteAddress.php',
    type: 'post',
    data : {
      address_id : id_end
    },

  }).done(res => {
    try {
      res = JSON.parse(res)
    } catch (error) {
      alert(res)
    }
  });
  
=======
  alert('oi');
  /*$.ajax({
    url: '../../../backend/ClientAddress/deleteAddress.php',
    type: 'post',
    data : {
      address_id : id_end
    }
  }).done(res => {
    console.log(res);
    loadClientAddress();
  });*/
>>>>>>> 70161ab2cf8296def6c22cc586cc5cd1562c128e
}