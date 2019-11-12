<?php

namespace Source\Models\Address;

use Source\Models\Request;

class Address extends Request {

  private $client_id;

  public function __construct($client_id)
  {
    $this->client_id = $client_id;
  }

  private function existsCep($data){
    $cep = $data['cep'];
    $stmt = $this->connection->prepare("SELECT `cep` FROM `tb_endereco` WHERE `cep` = ?");
    $stmt->bindParam(1, $cep);
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_OBJ);

    if(isset($row->cep)){
        return true;
    }else{
        return false;
    }
  }
}