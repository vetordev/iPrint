<?php


require '../php/connection.php';

$name = $_POST['name'];
$email = $_POST['email'];
$senha = md5($_POST['senha']);
// echo $senha;
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
    
    $endereço = ['cep' => $cep, 'logradouro' => $logradouro, 'bairro' => $bairro, 'cidade' => $cidade, 'uf' => $uf, 'comp' => $complemento];
    
    insertAddress($endereço, $con);
}
$endereço = ['cep' => $cep, 'numero' => $numero, 'comp' => $complemento];
insertClienteAdressData($endereço, $email, $con);

$result = pullId($email, $con);

echo json_encode($result);

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

function insertClienteAdressData($endereço, $email, $con){

    $cep = $endereço['cep'];
    $numero = $endereço['numero'];
    $comp = $endereço['comp'];
    
    $rs = $con->prepare('SELECT `id_pf` FROM `tb_fisica` WHERE `email_pf` = ?');
    $rs->bindParam(1, $email);
    $rs->execute();
    
    $row = $rs->fetch(PDO::FETCH_OBJ);
    $id = $row->id_pf;
    
    $stmt = $con->prepare('INSERT INTO `tb_clienteEnd`(`id_pf`, `cep`, `numero_clienteEnd`, `comp_endereco`) VALUES(?, ?, ?, ?) ');
    $stmt->bindParam(1, $id);
    $stmt->bindParam(2, $cep);
    $stmt->bindParam(3, $numero);
    $stmt->bindParam(4, $comp);

    $stmt->execute();
}

function pullId($email, $con){
    $stmt = $con->prepare('SELECT `id_pf` FROM `tb_fisica` WHERE `email_pf` = ?');
    $stmt->bindParam(1, $email);
    $stmt->execute();

    $row =  $stmt->fetch(PDO::FETCH_OBJ);

    $result = ['id' => ''];
    $result['id'] = $row->id_pf;
    return $result;
}

?>