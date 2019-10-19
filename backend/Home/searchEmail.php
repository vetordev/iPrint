<?php

require '../php/connection.php';

$email = $_POST['email'];

$result = existsInFisica($email, $con);
if ($result['exists'] == '1'){
    echo json_encode($result);
}else {
    $result = existsInJuridica($email, $con);
    echo json_encode($result);
    
}

function existsInFisica($email, $con){
    $stmt = $con->prepare("SELECT `email_pf`, `nome_pf` FROM `tb_fisica` WHERE `email_pf` = ? ");
    $stmt->bindParam(1, $email);
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_OBJ);
     
    $result = ['exists' => '', 'name' => ''];
    if (isset($row->email_pf)){
        $result['exists'] = '1';
        $result['name'] = $row->nome_pf;
    }else{
        $result['exists'] = '0';    
    }
    return $result;
}

function existsInJuridica($email, $con){
    $stmt = $con->prepare("SELECT `email_pj`, `nomeFant_pj` FROM `tb_juridica` WHERE `email_pj` = ? ");
    $stmt->bindParam(1, $email);
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_OBJ);
     
    $result = ['exists' => '', 'name' => ''];
    if (isset($row->email_pj)){
        $result['exists'] = '1';
        $result['name'] = $row->nomeFant_pj;
    }else{
        $result['exists'] = "0";    
    }
    return $result;
}


?>