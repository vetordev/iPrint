<?php

require './connection.php';

$cnpj = $_POST['cnpj'];
$rs = $_POST['rs'];
$ie = $_POST['ie'];
$nomeRes = $_POST['name'];
$senha = md5($_POST['senha']);
$nomeF = $_POST['nameF'];
$email = $_POST['email'];
$telComerc = $_POST['telComerc'];
$telResid = $_POST['telResid'];
$telCel = $_POST['telCel'];

$logradouro = $_POST['logradouro'];
$complemento = $_POST['complemento'] ?: null;
$bairro = $_POST['bairro'];
$cidade = $_POST['cidade'];
$uf =  $_POST['uf'];
$cep = $_POST['cep'];
$numero = $_POST['numero'];

$a = 'sdasdas';

$aaaaaaaa = 'sadasd';
// $telefone =  $_POST['telefone'];

//Inserindo o cliente
insertClientData($cnpj, $rs, $ie, $nomeF, $email, $senha, $nomeRes, $telCel, $telResid, $telComerc, $con);
//Verificando se o cep existe
if(!existsCep($cep, $con)){
    //Inserindo endereço na tabela de endereços
    
    $endereço = ['cep' => $cep, 'logradouro' => $logradouro, 'bairro' => $bairro, 'cidade' => $cidade, 'uf' => $uf];
    
    insertAddress($endereço, $con);
}
$endereço = ['cep' => $cep, 'numero' => $numero];
insertClienteAdressData($endereço, $email, $con);

function insertClientData($cnpj, $rs, $ie, $nomeF, $email, $senha, $nomeRes, $telCel, $telResid, $telComerc, $con){
    $stmt = $con->prepare('INSERT INTO `tb_juridica`(`cpnj_pj`, `rs_pj`, `ie_pj`, `nomeFant_pj`, `nomeResp_pj`, `email_pj`, `senha_pj`, `telCel_pj`, `telResid_pj`, `telComerc_pj`) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    $stmt->bindParam(1, $cnpj);
    $stmt->bindParam(2, $rs);
    $stmt->bindParam(3, $ie);
    $stmt->bindParam(4, $nomeF);
    $stmt->bindParam(5, $nomeRes);
    $stmt->bindParam(6, $email);
    $stmt->bindParam(7, $senha);
    $stmt->bindParam(8, $telCel);
    $stmt->bindParam(9, $telResid);
    $stmt->bindParam(10, $telComerc);
    
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

    if($stmt->execute()){
        
    };
}

function insertClienteAdressData($endereço, $email, $con){

    $cep = $endereço['cep'];
    $numero = $endereço['numero'];

    $rs = $con->prepare('SELECT `id_pj` FROM `tb_juridica` WHERE `email_pj` = ?');
    $rs->bindParam(1, $email);
    $rs->execute();
    
    $row = $rs->fetch(PDO::FETCH_OBJ);
    $id = $row->id_pj;
    
    $stmt = $con->prepare('INSERT INTO `tb_clienteEnd`(`id_pj`, `cep`, `numero_clienteEnd`) VALUES(?, ?, ?) ');
    $stmt->bindParam(1, $id);
    $stmt->bindParam(2, $cep);
    $stmt->bindParam(3, $numero);

    $stmt->execute();
}



?>