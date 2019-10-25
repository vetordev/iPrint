<?php

require '../php/connection.php';

$type = $_POST['type'];
$user_id = $_POST['user_id'];

function updateAccountPhysicalWithoutPassword($user_id, $nome, $ddn, $tel, $con){
  $stmt = $con->prepare("UPDATE `tb_fisica` SET `nome_pf` = ?, `ddn_pf` = ?, `telefone_pf` = ? WHERE `id_pf` = ?");
  $stmt->bindParam(1, $nome);
  $stmt->bindParam(2, $ddn);
  $stmt->bindParam(3, $tel);
  $stmt->bindParam(4, $user_id);
  $stmt->execute();
}
function updateAccountLegalWithoutPassword($user_id, $nome_fant, $nome_resp, $tel, $tel_res, $tel_comerc, $con){
  $stmt = $con->prepare("UPDATE `tb_juridica` SET `nomeFant_pj` = ?, `nomeResp_pj` = ?, `telCel_pj` = ?, `telResid_pj` = ?, `telComerc_pj` = ? WHERE `id_pj` = ?");
  $stmt->bindParam(1, $nome_fant);
  $stmt->bindParam(2, $nome_resp);
  $stmt->bindParam(3, $tel);
  $stmt->bindParam(4, $tel_res);
  $stmt->bindParam(5, $tel_comerc);
  $stmt->bindParam(6, $user_id);
  $stmt->execute();
}
#Pessoa física
if($type == 'physical'){

  #Dados
  $nome = $_POST['nome'];
  $ddn = $_POST['ddn'];
  $tel = $_POST['telefone'];

  updateAccountPhysicalWithoutPassword($user_id, $nome, $ddn, $tel, $con);
  #Sem mudar a senha
  

}else{
  #Dados
  $nome_fant = $_POST['nome_fant'];
  $nome_resp = $_POST['nome_resp'];
  $tel = $_POST['telefone'];
  $tel_res = $_POST['telefone_res'];
  $tel_comerc = $_POST['telefone_comerc'];

  updateAccountLegalWithoutPassword($user_id, $nome_fant, $nome_resp, $tel, $tel_res, $tel_comerc, $con);
  #Sem mudar a senha

}






?>