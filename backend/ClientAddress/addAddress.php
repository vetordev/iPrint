<?php

require '../php/connection.php';

$logradouro = $_POST['logradouro'];
$complemento = $_POST['complemento'] ?: null;
$bairro = $_POST['bairro'];
$cidade = $_POST['cidade'];
$uf =  $_POST['uf'];
$cep = $_POST['cep'];
$numero = $_POST['numero'];

$user_id = $_POST['user_id'];
$type = $_POST['type'];


echo 'oi';
//Verificando se o cep existe

if(!existsCep($cep, $con)){
  //Inserindo endereço na tabela de endereços
  
  $endereço = ['cep' => $cep, 'logradouro' => $logradouro, 'bairro' => $bairro, 'cidade' => $cidade, 'uf' => $uf, 'comp' => $complemento];
  
  insertAddress($endereço, $con);
}
$endereço = ['cep' => $cep, 'numero' => $numero, 'comp' => $complemento];
insertClienteAdressData($endereço, $user_id, $type, $con);

echo 'ok';

function addressInUse($cep, $complemento, $numero, $type, $user_id, $con){
  if($type == 'physical'){
    $stmt = $con->prepare("SELECT `id_clienteEnd` FROM `tb_clienteEnd` WHERE `cep` = ? and `numero_clienteEnd` = ? and `comp_endereco` = ? and `id_pf` = ?");
    $stmt->bindParam(1, $cep);
    $stmt->bindParam(2, $numero);
    $stmt->bindParam(2, $numero);
    $stmt->bindParam(3, $complemento);
    $stmt->bindParam(4, $user_id);
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_OBJ);

    if($row->id_clienteEnd){
      return false;
    }else{
      return true;
    }
  }else{
    $stmt = $con->prepare("SELECT `id_clienteEnd` FROM `tb_clienteEnd` WHERE `cep` = ? and `numero_clienteEnd` = ? and `comp_endereco` = ? and `id_pj` = ?");
    $stmt->bindParam(1, $cep);
    $stmt->bindParam(2, $numero);
    $stmt->bindParam(2, $numero);
    $stmt->bindParam(3, $complemento);
    $stmt->bindParam(4, $user_id);
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_OBJ);

    if($row->id_clienteEnd){
      return false;
    }else{
      return true;
    }
  }
  
  
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

function insertClienteAdressData($endereço, $user_id, $type, $con){

  $cep = $endereço['cep'];
  $numero = $endereço['numero'];
  $comp = $endereço['comp'];
  
  if($type == 'physical'){
  
    $stmt = $con->prepare('INSERT INTO `tb_clienteEnd`(`id_pf`, `cep`, `numero_clienteEnd`, `comp_endereco`) VALUES(?, ?, ?, ?) ');
    $stmt->bindParam(1, $user_id);
    $stmt->bindParam(2, $cep);
    $stmt->bindParam(3, $numero);
    $stmt->bindParam(4, $comp);

    $stmt->execute();
  }else{
    $stmt = $con->prepare('INSERT INTO `tb_clienteEnd`(`id_pj`, `cep`, `numero_clienteEnd`, `comp_endereco`) VALUES(?, ?, ?, ?) ');
    $stmt->bindParam(1, $user_id);
    $stmt->bindParam(2, $cep);
    $stmt->bindParam(3, $numero);
    $stmt->bindParam(4, $comp);

    $stmt->execute();
  }
  
}



?>
