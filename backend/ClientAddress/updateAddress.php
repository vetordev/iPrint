<?php

require '../php/connection.php';

$address = $_POST['address_id'];

$cep = $_POST['cep'];
$log = $_POST['logradouro'];
$num = $_POST['numero'];
$bar = $_POST['bairro'];
$cidade = $_POST['cidade'];
$uf = $_POST['estado'];
$comp = $_POST['complemento'];

$user_id = $_POST['user_id'];
$type = $_POST['type'];

if (!existsCep($cep, $con))  {
  $endereço = ['cep' => $cep, 'logradouro' => $log, 'bairro' => $bar, 'cidade' => $cidade, 'uf' => $uf];
  insertAddress($endereço, $con);
}
updateClientAddress($cep, $num, $comp, $address, $con);

echo json_encode('ok');
function updateClientAddress($cep, $num, $comp, $address_id, $con){
  $stmt = $con->prepare("UPDATE `tb_clienteEnd` SET `cep` = ?, `numero_clienteEnd` = ?, `comp_endereco` = ? WHERE `id_clienteEnd` = ?");
  $stmt->bindParam(1, $cep);
  $stmt->bindParam(2, $num);
  $stmt->bindParam(3, $comp);
  $stmt->bindParam(4, $address_id);
  $stmt->execute();
}

function existsCep($cep, $con){
  $stmt = $con->prepare("SELECT `cep` FROM `tb_endereco` WHERE `cep` = ?");
  $stmt->bindParam(1, $cep);
  $stmt->execute();

  $row = $stmt->fetch(PDO::FETCH_OBJ);

  if(isset($row->cep)){
      return true;
  }else{
      return false;
  }
}
function insertAddress($endereço, $con){
  $cep = $endereço['cep'];
  $logradouro = $endereço['logradouro'];
  $bairro = $endereço['bairro'];
  $cidade = $endereço['cidade'];
  $uf = $endereço['uf'];
  

  $stmt = $con->prepare('INSERT INTO `tb_endereco` VALUES (?, ?, ?, ?, ?)');
  $stmt->bindParam(1, $cep);
  $stmt->bindParam(2, $logradouro);
  $stmt->bindParam(3, $bairro);
  $stmt->bindParam(4, $cidade);
  $stmt->bindParam(5, $uf);
  
  $stmt->execute();
      
  
}





?>