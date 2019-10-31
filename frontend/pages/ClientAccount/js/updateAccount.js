window.addEventListener('load', load => {
  $('.save').click(updateAccount)
});

function updateAccount() {
  const user_id = localStorage.getItem('user_id');
  const type = localStorage.getItem('type');
  const id_end = localStorage.getItem('id_end');

  if (type == 'physical'){
    const name = $('#name').val();
    const ddn = $('#ddn').val();
    const tel = $('#telefone').val();
    $.ajax({
      url: '../../../backend/ClientAccount/updateAccountNotPassword.php',
      type: 'post',
      data : {
        user_id : user_id,
        type : type,
        id_end : id_end,
        nome : name,
        ddn : ddn,
        telefone : tel
      }
    }).done(res => {
      try {
        res = JSON.parse(res);
      } catch (error) {
        alert(res)
      }
    });
  }else{
    
    const name_f = $('#name-f').val();
    const name_e = $('#name-e').val();
    const tel_cel = $('#telefone-cel').val();
    const tel_res = $('#telefoneR').val();
    const tel_comerc = $('#telefoneCom').val();

    $.ajax({
      url: '../../../backend/ClientAccount/updateAccountNotPassword.php',
      type: 'post',
      data : {
        user_id : user_id,
        type : type,
        id_end : id_end,
        nome_fant : name_f,
        nome_resp : name_e,
        telefone : tel_cel,
        telefone_res : tel_res,
        telefone_comerc : tel_comerc
      }
    }).done(res => {
      // try {
      //   res = JSON.parse(res);
      // } catch (error) {
      //   alert(res)
      // }
      alert(res);
    });
  }
}