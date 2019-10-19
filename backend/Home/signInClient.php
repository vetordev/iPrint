<?php

require '../../php/connection.php';

$email = $_POST['email'];
$senha = md5($_POST['senha']);

$result = existsInFisica($email, $senha, $con);
if ($result['id'] != '0'){
    echo json_encode($result);
}else {
    $result = existsInJuridica($email, $senha, $con);
    echo json_encode($result);
}


function existsInFisica($email, $senha, $con){
    $stmt = $con->prepare("SELECT `id_pf` FROM `tb_fisica` WHERE `email_pf` = ? AND `senha_pf` = ?");
    $stmt->bindParam(1, $email);
    $stmt->bindParam(2, $senha);
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_OBJ);
     
    $result = ['id' => '', 'type' => ''];
    if (isset($row->id_pf)){
        $result['id'] = $row->id_pf;
        $result['type'] = 'physical';
    }else{
        $result['id'] = '0';    
    }
    return $result;
}

function existsInJuridica($email, $senha, $con){
    $stmt = $con->prepare("SELECT `id_pj` FROM `tb_juridica` WHERE `email_pj` = ? AND `senha_pj` = ?");
    $stmt->bindParam(1, $email);
    $stmt->bindParam(2, $senha);
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_OBJ);
     
    $result = ['id' => '', 'type' => ''];
    if (isset($row->id_pj)){
        $result['id'] = $row->id_pj;
        $result['type'] = 'legal';
    }else{
        $result['id'] = '0';    
    }
    return $result;
}
?>