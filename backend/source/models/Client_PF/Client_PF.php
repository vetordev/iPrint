<?php

namespace Source\Models\Client_PF;

use Exception;
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
      $this->address->create();
    } catch(Exception $exce){
      echo $exce;
    }
  }
  public function emailExists($data){
    $stmt = $this->connection->prepare("SELECT `email_pf`, `nome_pf` FROM `tb_fisica` WHERE `email_pf` = ? ");
    $stmt->bindParam(1, $data['email']);
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_OBJ);
     
    $result = ['exists' => '', 'name' => ''];
    if (isset($row->email_pf)){
        $result['exists'] = true;
        $result['name'] = $row->nome_pf;
    }else{
        $result['exists'] = false;    
    }
    return $result;
  }

  public function login($data){
    $stmt = $this->connection->prepare("SELECT `id_pf` FROM `tb_fisica` WHERE `email_pf` = ? AND `senha_pf` = ?");
    $stmt->bindParam(1, $data['email']);
    $stmt->bindParam(2, $data['password']);
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_OBJ);
     
    $result = ['id' => '', 'type' => ''];
    if (isset($row->id_pf)){
        $result['id'] = $row->id_pf;
        $result['type'] = 'physical';
    }else{
        $result['id'] = false;    
    }
    return $result;
  }
  public function fetchEmail($data){
    $stmt = $this->connection->prepare("SELECT `email_pf` FROM `tb_fisica` WHERE `id_pf` = ?");
    $stmt->bindParam(1, $data['user_id']);
    $stmt->execute();

    $row =  $stmt->fetch(PDO::FETCH_OBJ);

    return $row->email_pf;
  }

  public function updatedEmail($data){
    $newemail = ['email' => $data['newemail']];
    if (!$this->emailExists($newemail)){
      
    }
  }
  


}