<?php

require '../php/connection.php';

$type = $_POST['type'];
$user_id = $_POST['user_id'];
$senha = md5($_POST['senha']);
#Pessoa física
if($type == 'physical'){

  #Dados
  $nome = $_POST['nome'];
  $ddn = $_POST['ddn'];
  $tel = $_POST['telefone'];

  updateAccountPhysicalWithPassword($user_id, $nome, $ddn, $tel, $senha, $con);
  #Sem mudar a senha
  function updateAccountPhysicalWithPassword($user_id, $nome, $ddn, $tel, $senha,  $con){
    $stmt = $con->prepare("UPDATE `tb_fisica` SET `nome_pf` = ?, `ddn_pf` = ?, `telefone_pf` = ?, `senha_pf` = ? WHERE `id_pf` = ?");
    $stmt->bindParam(1, $nome);
    $stmt->bindParam(2, $ddn);
    $stmt->bindParam(3, $tel);
    $stmt->bindParam(3, $senha);
    $stmt->bindParam(5, $user_id);
    $stmt->execute();
  }

}else{
  #Dados
  $nome_fant = $_POST['nome_fant'];
  $nome_resp = $_POST['nome_resp'];
  $tel = $_POST['telefone'];
  $tel_res = $_POST['telefone_res'];
  $tel_comerc = $_POST['telefone_comerc'];

  updateAccountLegalWithPassword($user_id, $nome_fant, $nome_resp, $tel, $tel_res, $tel_comerc, $senha, $con);
  #Sem mudar a senha
  function updateAccountLegalWithPassword($user_id, $nome_fant, $nome_resp, $tel, $tel_res, $tel_comerc, $senha, $con){
    $stmt = $con->prepare("UPDATE `tb_juridica` SET `nomeFant_pj` = ?, `nomeResp_pj` = ?, `telCel_pj` = ?, `telResid_pj` = ?, `telComerc_pj`, = ?, `senha_pj` = ? WHERE `id_pj` = ?");
    $stmt->bindParam(1, $nome_fant);
    $stmt->bindParam(2, $nome_resp);
    $stmt->bindParam(3, $tel);
    $stmt->bindParam(4, $tel_res);
    $stmt->bindParam(5, $tel_comerc);
    $stmt->bindParam(6, $senha);
    $stmt->bindParam(7, $user_id);
    $stmt->execute();
  }
}






?>










