window.addEventListener('load', () => {
 
});

function excludeAddress(id_end) {
  $.ajax({
    url: '../../../backend/ClientAddress/deleteAddress.php',
    type: 'post',
    data : {
      address_id : id_end
    }
  }).done(res => {
    console.log(res);
    loadClientAddress();
  });
}