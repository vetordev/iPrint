<?php

require '../../php/connection.php';

$user_id = $_POST['user_id'];
$type = $_POST['type'];

$response = fetchUserData($user_id, $type, $con);

echo json_encode($response);

function fetchUserData($user_id, $type, $con){
  if($type == 'physical'){
    $stmt = $con->prepare("SELECT `email_pf`, `nome_pf`, `telefone_pf` FROM `tb_fisica` WHERE `id_pf` = ?");
    $stmt->bindParam(1, $user_id);
    $stmt->execute();

    $row =  $stmt->fetch(PDO::FETCH_OBJ);
    $response = ['email' => '', 'telefone' => '', 'nome' => ''];

    if($row){
      $response['email'] = $row->email_pf;
      $response['telefone'] = $row->telefone_pf;
      $response['nome'] = $row->nome_pf;
    }
    return $response;

  }else{
    $stmt = $con->prepare("SELECT `email_pj`, `nomeFant_pj`, `telComerc_pj` FROM `tb_juridica` WHERE `id_pj` = ?");
    $stmt->bindParam(1, $user_id);
    $stmt->execute();

    $row =  $stmt->fetch(PDO::FETCH_OBJ);
    $response = ['email' => '', 'telefone' => '', 'nome' => ''];

    
    $response['email'] = $row->email_pj;
    $response['telefone'] = $row->telComerc_pj;
    $response['nome'] = $row->nomeFant_pj;
    

    return $response;
  }
  

}



?>