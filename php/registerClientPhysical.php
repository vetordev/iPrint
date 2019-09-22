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
$numero = $_POST['numero'];
$telefone =  $_POST['telefone'];

//Inserindo o cliente
insertClientData($name, $ddn, $cpf, $telefone, $email, $senha, $con);
//Verificando se o cep existe
if(!existsCep($cep, $con)){
    //Inserindo endereço na tabela de endereços
    $endereço = ['cep' => $cep, 'logradouro' => $logradouro, 'bairro' => $bairro, 'cidade' => $cidade, 'uf' => $uf];
    insertAddress($endereço, $con);
}
$endereço = ['cep' => $cep, 'numero' => $numero];
insertClienteAdressData($endereço, $email, $con);

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
function existsCep($cep, $con){
    $stmt = $con->prepare('SELECT `cep` FROM `tb_endereço` WHERE `cep` = ?');
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
    $stmt = $con->prepare('INSERT INTO `tb_endereço` VALUES (?, ?, ?, ?, ?)');

    $stmt->bindParam(1, $endereço['cep']);
    $stmt->bindParam(2, $endereço['logradouro']);
    $stmt->bindParam(3, $endereço['bairro']);
    $stmt->bindParam(4, $endereço['cidade']);
    $stmt->bindParam(5, $endereço['uf']);

    $stmt->execute();
}

function insertClienteAdressData($endereço, $email, $con){

    $rs = $con->prepare('SELECT `id_pf` FROM `tb_fisica` WHERE `email_pf` = ?');
    $rs->bindParam(1, $email);
    $rs->execute();
    
    $row = $rs->fetch(PDO::FETCH_OBJ);
    $id = $row->id_pf;
    
    $stmt = $con->prepare('INSERT INTO `tb_clienteEnd`(`id_pf`, ` id_cep`, `numero_clienteEnd`) VALUES(?, ?, ?) ');
    $stmt->bindParam(1, $id);
    $stmt->bindParam(2, $endereço['cep']);
    $stmt->bindParam(3, $endereço['numero']);

    $stmt->execute();
}


?>