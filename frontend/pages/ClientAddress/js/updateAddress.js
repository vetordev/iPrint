window.addEventListener('load', load =>{

  //Guardar as informações dos endereços no localStorage
  // $('.btn-editar').click(() => editAddress('end-uno'));


  // const btns = [ ... document.querySelectorAll('.btn-editar') ];
  // alert(btns.length)
  $('.btn-editar').click(() => {
    alert('oi');
    // const cep = $('#cep').val();
    // const numero = $('#numero').val();
    // const complemento = $('#complemento').val();
    // localStorage.setItem('cep', cep);
    // localStorage.setItem('comp', complemento)
    // localStorage.setItem('num', numero)

    // const btns = [ ... document.querySelectorAll('.btn-editar')];
    // alert(btns.length)
  });


  $('#btn-edit-address').click(() => {
    const cep = $('#cep').val();
    const logradouro = $('#logradouro').val();
    const numero = $('#numero').val();
    const bairro = $('#bairro').val();
    const cidade = $('#cidade').val();
    const uf = $('#uf').val();
    const complemento = $('#complemento').val();
    const user_id = localStorage.getItem('user_id');
    const type = localStorage.getItem('type');

    updateAddress(cep, logradouro, numero, bairro, cidade, uf, complemento, user_id, type);
  });
  $('#btn-edit-address').click(saveEditions);

});

// const updateAddress = (cep, logradouro, numero, bairro, cidade, estado, complemento, user_id, type) => {
//   if(cep == localStorage.getItem('cep')){
//     $.ajax({
//       url: '../../../backend/ClientAddress/updateAddress.php',
//       type: 'post',
//       data : {
//         cep : cep,
//         numero : numero,
//         complemento : complemento,
//         oldNum = localStorage.getItem('num'),
//         oldComp = localStorage.getItem('comp'),
//         is : false
//         // false para quando o cep nao mudar
//       }
//     }).done(res => {
//       try {
//         res = JSON.parse(res)
//         alert(res)
//       } catch (error) {
//         alert(res)
//       }
//     })

//   }else{

//     $.ajax({
//       url: '../../../backend/ClientAddress/updateAddress.php',
//       type: 'post',
//       data: {
//         cep : cep,
//         logradouro : logradouro,
//         numero : numero,
//         bairro : bairro,
//         cidade : cidade,
//         estado : estado,
//         complemento : complemento,
//         user_id : user_id,
//         type : type,
//         is : true,
//         oldNum 
//         // true para quando o cep for mudado
//       }
//     }).done(res => {
//       try {
//         res = JSON.parse(res)
//         alert(res)
//       } catch (error) {
//         alert(res)
//       }
//     });
//   }
// } 