<?php

namespace Source\Models\Client_PF;

use Source\Models\Address\Address;
use Source\Models\Request;

class Client_PF extends Request {

  /** @var Address */
  private $address;
  private $client_id;
  private $data;
  
  public function __construct($client_id, $data, $connection)
  {
    $this->client_id = $client_id;
    $this->data = $data;
    $this->connection = $connection;

    $this->address = new Address($this->client_id, $this->data, $this->connection);
  }
  /* Inserir um cliente */
  public function store()
  {  
    $stmt = $this->connection->prepare('INSERT INTO `tb_fisica`(`nome_pf`, `ddn_pf`, `cpf_pf`, `telefone_pf`, `email_pf`, `senha_pf`) VALUES(?, ?, ?, ?, ?, ?)');

    $stmt->bindParam(1, $this->data['name']);
    $stmt->bindParam(2, $this->data['ddn']);
    $stmt->bindParam(3, $this->data['cpf']);
    $stmt->bindParam(4, $this->data['telefone']);
    $stmt->bindParam(5, $this->data['email']);
    $stmt->bindParam(6, $this->data['senha']);

    try {
      $stmt->execute();
      
      $this->address->store();
      $this->address->create
    } catch (Exception $exce) {
      echo $exce;
    }
    

  }

}