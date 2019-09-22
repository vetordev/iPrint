<?php

require './connection.php';

$name = $_POST['name'];
$email = $_POST['email'];
$senha = md5($_POST['senha']);
$ddn = $_POST['ddn'];
$cpf = $_POST['cpf'];
$logradouro = $_POST['logradouro'];
$complemento = $_POST['complemento'] ?: null;
$bairro = $_POST['bairro'];
$cidade = $_POST['cidade'];
$uf =  $_POST['uf'];
$cep = $_POST['cep'];
$telefone =  $_POST['telefone'];

//Inserindo o cliente
insertClientData($name, $ddn, $cpf, $telefone, $email, $senha, $con);








function insertClientData($name, $ddn, $cpf, $telefone, $email, $senha, $con){
    $stmt = $con->prepare('INSERT INTO `tb_fisica`(`nome_pf`, `ddn_pf`, `cpf_pf`, `telefone_pf`, `email_pf`, `senha_pf`) VALUES(?, ?, ?, ?, ?, ?)');
    $stmt->bindParam(1, $name);
    $stmt->bindParam(2, $ddn);
    $stmt->bindParam(3, $cpf);
    $stmt->bindParam(4, $telefone);
    $stmt->bindParam(5, $email);
    $stmt->bindParam(6, $senha);
    $stmt->execute();

}
function insertClientAddress($email, $logradouro, $complemento, $bairro, $cidade, $uf, $telefone, $con){

}


?>