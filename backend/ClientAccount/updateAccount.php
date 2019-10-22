<?php

require '../php/connection.php';

$type = $_POST['type'];

if($type == 'physical'){
  $user_id = $_POST['user_id'];
  $nome = $_POST['nome'];
  $ddn = $_POST['ddn'];
  $tel = $_POST['telefone'];

  #Sem mudar a senha
  function updateAccountWithoutPassword($user_id, $nome, $ddn, $tel, $con){
    $stmt = $con->prepare("UPDATE `tb_fisica` SET `nome_pf` = ?, `senha_pf` = ?, `ddn_pf` = ?, `telefone_pf` = ? WHERE `id_pf` = ?");
  
  }

}else{

}






?>