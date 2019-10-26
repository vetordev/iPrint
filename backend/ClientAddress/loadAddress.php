<?php

require '../php/connection.php';

$user_id = $_POST['user_id'];
$type = $_POST['type'];

$result = loadAdress($user_id, $type, $con);

echo json_encode($result);
function loadAdress($user_id, $type, $con){
  $response = [];
  $stmt = null;
  if ($type == 'physical'){
    $stmt = $con->prepare("SELECT `cep`, `numero_clienteEnd`, `comp_endereco`, `id_clienteEnd` FROM `tb_clienteEnd` WHERE `id_pf` = ?");
    $stmt->bindParam(1, $user_id);
    
  }else{
    $stmt = $con->prepare("SELECT `cep`, `numero_clienteEnd`, `comp_endereco`, `id_clienteEnd` FROM `tb_clienteEnd` WHERE `id_pj` = ?");
    $stmt->bindParam(1, $user_id);
    
  }
  $stmt->execute();
  $i = 0;
  $cep = null;
  while ($row = $stmt->fetch(PDO::FETCH_OBJ )) {

    $cep = $row->cep;
    $data = $row->id_clienteEnd;
    $data = $data . ',' . $cep;

    $rs = $con->prepare("SELECT `logra_endereco`, `bairro_endereco`, `cidade_endereco`, `uf_endereco` FROM `tb_endereco` WHERE `cep` = ?");
    $rs->bindParam(1, $cep);
    $rs->execute();

    $row_end = $rs->fetch(PDO::FETCH_OBJ);

    
    $data = $data . ',' . $row_end->logra_endereco;
    $data = $data . ',' . $row->numero_clienteEnd;
    $data = $data . ',' . $row_end->bairro_endereco;
    $data = $data . ',' . $row_end->cidade_endereco;
    $data = $data . ',' . $row_end->uf_endereco;
    $row->comp_endereco != null ? $data = $data . ',' . $row->comp_endereco : $data = $data . ',';

    // $data = $data . ',';
    $response[$i] = $data;
    $i = $i + 1;
  }

  

  
  return $response;
}


?>