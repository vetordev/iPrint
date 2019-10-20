<?php

require '../php/connection.php';

$user_id = $_POST['user_id'];
$type = $_POST['type'];


$res = deleteAccount($user_id, $type, $con);

echo json_encode($res);

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