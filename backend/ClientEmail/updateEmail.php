<?php

require '../php/connection.php';

$user_id = $_POST['user_id'];
$type = $_POST['type'];
$newemail = $_POST['newemail'];
$oldemail = $_POST['oldemail'];
$password = md5($_POST['password']);

if(!emailAlreadyExists($newemail, $type, $con)){
  if(emailAndPasswordCorrect($oldemail, $password, $user_id, $type, $con)){
    updateEmail($newemail, $oldemail, $type, $con);
    echo json_encode('ok');
  }else{
    echo json_encode('email ou senha incorretos');
  }
}else{
  echo json_encode('email em uso');
}


function emailAlreadyExists($email, $type, $con){
  if($type == 'physical'){
    $stmt = $con->prepare('SELECT `id_pf` FROM `tb_fisica` WHERE `email_pf` = ?');
    $stmt->bindParam(1, $email);
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_OBJ);
    return isset($row->id_pf) ? true : false;
  }else{
    $stmt = $con->prepare('SELECT `id_pj` FROM `tb_juridica` WHERE `email_pj` = ?');
    $stmt->bindParam(1, $email);
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_OBJ);
    return isset($row->id_pj) ? true : false;
  }
  
}
function emailAndPasswordCorrect($email, $password, $user_id, $type, $con){
  if($type == 'physical'){
    $stmt = $con->prepare("SELECT `id_pf` FROM `tb_fisica` WHERE `email_pf` = ? AND `senha_pf` = ?");
    $stmt->bindParam(1, $email);
    $stmt->bindParam(2, $password);
    $stmt->execute();
  
    $row = $stmt->fetch(PDO::FETCH_OBJ);
    if(isset($row->id_pf)){
      return $row->id_pf == $user_id ? true : false;  
    }else{
      return false;
    }
    
  }else{
    $stmt = $con->prepare("SELECT `id_pj` FROM `tb_juridica` WHERE `email_pj` = ? AND `senha_pj` = ?");
    $stmt->bindParam(1, $email);
    $stmt->bindParam(2, $password);
    $stmt->execute();
  
    $row = $stmt->fetch(PDO::FETCH_OBJ);
    if(isset($row->id_pj)){
      return $row->id_pj == $user_id ? true : false;
    }else{
      return false;
    }
    
  }

}

function updateEmail($newemail, $oldemail, $type, $con){
  if($type == 'physical'){
    $stmt = $con->prepare('UPDATE `tb_fisica` SET `email_pf` = ? WHERE `email_pf` = ?');
    $stmt->bindParam(1, $newemail);
    $stmt->bindParam(2, $oldemail);
    $stmt->execute();
  }else{
    $stmt = $con->prepare('UPDATE `tb_juridica` SET `email_pj` = ? WHERE `email_pj` = ?');
    $stmt->bindParam(1, $newemail);
    $stmt->bindParam(2, $oldemail);
    $stmt->execute();
  }
 
}

?>