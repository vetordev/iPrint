<?php



require '../php/connection.php';

$user_id = $_POST['user_id'];
$type = $_POST['type'];

$result = fetchData($user_id, $type, $con);

echo json_encode($result);

function fetchData($user_id, $type, $con){
  if($type == 'physical'){
    $stmt = $con->prepare("SELECT `email_pf`, `ddn_pf`, `nome_pf`, `cpf_pf`, `telefone_pf` FROM `tb_fisica` WHERE `id_pf` = ?");
    $stmt->bindParam(1, $user_id);
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_OBJ);

    $result = ['email' => $row->email_pf, 'ddn' => $row->ddn_pf, 'nome' => $row->nome_pf, 'cpf' => $row->cpf_pf, 'telefone' => $row->telefone_pf];
    return $result;


  }else{
    $stmt = $con->prepare("SELECT `email_pj`, `cnpj_pj`, `nomeResp_pj`, `nomeFant_pj`, `ie_pj`, `rs_pj`, `telComerc_pj`, `telResid_pj`, `telCel_pj` FROM `tb_juridica` WHERE `id_pj` = ?");
    $stmt->bindParam(1, $user_id);
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_OBJ);

    $result = ['email' => $row->email_pj, 'cnpj' => $row->cnpj_pj, 'nomeR' => $row->nomeResp_pj, 'nomeF' => $row->nomeFant_pj, 'ie' => $row->ie_pj, 'rs' => $row->rs_pj, 'telComerc' => $row->telComerc_pj, 'telResid' => $row->telResid_pj, 'telCel' => $row->telCel_pj];
    return $result;
  }

  
}





?>