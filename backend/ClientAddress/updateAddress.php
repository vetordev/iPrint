<?php
require '../../php/connection.php';

$cep = $_POST['cep'];
$log = $_POST['logradouro'];
$num = $_POST['numero'];
$bar = $_POST['bairro'];
$cidade = $_POST['cidade'];
$uf = $_POST['estado'];
$comp = $_POST['complemento'];

$user_id = $_POST['user_id'];
$type = $_POST['type'];

function updateDataClient($cep, $num, $comp, $user_id, $type, $con){
  $stmt = $con->prepare("UPDATE `tb_clienteEnd` SET `cep` = ? AND `numero_clienteEnd` = ? AND `comp_endereco` = ? WHERE `cep` = ?");
  $stmt->bindParam(1, $cep);
  $stmt->bindParam(1, $num);
  $stmt->bindParam(1, $comp);
}

?>