<?php

require '../../php/connection.php';

$result = ['email' => ''];

$user_id = $_POST['id'];
$type = $_POST['type'];

if($type == 'physical'){
  $result['email'] = emailPhysical($user_id, $con);
}else{
  $result['email'] = emailLegal($user_id, $con);
}

echo json_encode($result);


function emailPhysical($id, $con){
  $stmt = $con->prepare("SELECT `email_pf` FROM `tb_fisica` WHERE `id_pf` = ?");
  $stmt->bindParam(1, $id);
  $stmt->execute();
  
  $row =  $stmt->fetch(PDO::FETCH_OBJ);

  return $row->email_pf;
}
function emailLegal($id, $con){
  $stmt = $con->prepare("SELECT `email_pj` FROM `tb_juridica` WHERE `id_pj` = ?");
  $stmt->bindParam(1, $id);
  $stmt->execute();

  $row =  $stmt->fetch(PDO::FETCH_OBJ);

  return $row->email_pj;
}




?>