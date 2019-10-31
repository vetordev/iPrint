window.addEventListener('load', () => {
 
});

function excludeAddress(id_end) {
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
  
}