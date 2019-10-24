<?php

require '../php/connection.php';

$address = $_POST['address_id'];
// $user_id = $_POST['user_id'];
// $type = $_POST['type'];
// $cep = $_POST['cep'];

deleteClientAddress($address, $con);
// if(!existsCep($cep, $con)){
//   deleteAddress($cep, $con);
// }

echo json_encode('ok');
function deleteClientAddress($address, $con){
  $stmt = $con->prepare('DELETE FROM `tb_clienteend` WHERE `id_clienteEnd` = ?');
  $stmt->bindParam(1, $address);
  $stmt->execute();
}
function existsCep($cep, $con){
  $stmt = $con->prepare("SELECT `cep` FROM `tb_clienteend` WHERE `cep` = ?");
  $stmt->bindParam(1, $cep);
  $stmt->execute();

  $row = $stmt->fetch(PDO::FETCH_OBJ);

  if(isset($row->cep)){
      return true;
  }else{
      return false;
  }

}
function deleteAddress($cep, $con){
  $stmt = $con->prepare('DELETE FROM `tb_endereco` WHERE `cep` = ?');
  $stmt->bindParam(1, $cep);
  $stmt->execute();
}

?>