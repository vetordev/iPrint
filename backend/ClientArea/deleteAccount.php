<?php

require '../php/connection.php';

$user_id = $_POST['user_id'];
$type = $_POST['type'];


deleteClientAddress($address, $con);
// if(!existsCep($cep, $con)){
//   deleteAddress($cep, $con);
// }
$res = deleteAccount($user_id, $type, $con);

echo json_encode($res);

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
// function deleteAddress($cep, $con){
//   $stmt = $con->prepare('DELETE FROM `tb_endereco` WHERE `cep` = ?');
//   $stmt->bindParam(1, $cep);
//   $stmt->execute();
// }


function deleteAccount($user_id, $type, $con) {
  if($type == 'physical'){
    $stmt = $con->prepare("DELETE FROM `tb_fisica` WHERE `id_pf` = ?");
    $stmt->bindParam(1, $user_id);
    if ($stmt->execute()) {
      return 'ok';
    }

  }else{
    $stmt = $con->prepare("DELETE FROM `tb_juridica` WHERE `id_pj` = ?");
    $stmt->bindParam(1, $user_id);
    if ($stmt->execute()) {
      return 'ok';
    }
  }
}
?>