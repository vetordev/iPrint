<?php

namespace Source\Models\Address;

use Exception;
use Source\Models\Request;
use PDO;

class Address extends Request{

  private $client_id;
  private $data;

  public function __construct($client_id, $data, $connection)
  {
    $this->client_id = $client_id;
    $this->data = $data;
    $this->connection = $connection;    
  }

  
  public function store(){
    if ($this->existsCep())
      # Cria o cep caso ele não exista
      $this->createAddress();

    # insere o endereço de um usuário no banco  
    storeClientAddress();   
    
  }

  public function show(){

  }

  /* Alterar um endereço */
  public function update(){
    if ($this->existsCep())
      # Cria o cep caso ele não exista
      $this->createAddress();

    $stmt = $this->connection->prepare("UPDATE `tb_clienteEnd` SET `cep` = ?, `numero_clienteEnd` = ?, `comp_endereco` = ? WHERE `id_clienteEnd` = ?");
    $stmt->bindParam(1, $this->data['cep']);
    $stmt->bindParam(2, $this->data['numero']);
    $stmt->bindParam(3, $this->data['complemento']);
    $stmt->bindParam(4, $this->data['address_id']);
    $stmt->execute();
  }

  /* Deleta o endereço de um usuário */
  public function destroy(){
    $stmt = $this->connection->prepare('DELETE FROM `tb_clienteend` WHERE `id_clienteEnd` = ?');
    $stmt->bindParam(1, $this->client_id);
    $stmt->execute();
  }


  /* Adiciona a referência do endereço de um cliente */
  private function storeClientAddress(){
    # Caso o cliente seja físico
    $stmt = null;
    if ($this->data['typeClient'] == 'physical'){

      $stmt = $this->connection->prepare('INSERT INTO `tb_clienteEnd`(`id_pf`, `cep`, `numero_clienteEnd`, `comp_endereco`) VALUES(?, ?, ?, ?) ');
      $stmt->bindParam(1, $this->client_id);
      $stmt->bindParam(2, $this->data['cep']);
      $stmt->bindParam(3, $this->data['numero']);
      $stmt->bindParam(4, $this->data['complemento']);

    }
    # Caso o cliente seja jurídico
    elseif($this->data['typeClient'] == 'legal'){
      $stmt = $this->connection->prepare('INSERT INTO `tb_clienteEnd`(`id_pj`, `cep`, `numero_clienteEnd`, `comp_endereco`) VALUES(?, ?, ?, ?) ');
      $stmt->bindParam(1, $this->client_id);
      $stmt->bindParam(2, $this->data['cep']);
      $stmt->bindParam(3, $this->data['numero']);
      $stmt->bindParam(4, $this->data['complemento']);
        
    }
    try {
      $stmt->execute();  
    } catch (Exception $exce) {
      echo $exce;
    }
    
    
  }
  /* Cria um endereço no banco */
  private function createAddress(){
    $stmt = $this->connection->prepare('INSERT INTO `tb_endereco` VALUES (?, ?, ?, ?, ?)');
    $stmt->bindParam(1, $this->data['cep']);
    $stmt->bindParam(2, $this->data['logradouro']);
    $stmt->bindParam(3, $this->data['bairro']);
    $stmt->bindParam(4, $this->data['cidade']);
    $stmt->bindParam(5, $this->data['uf']);

    
    try {
      $stmt->execute();  
    } catch (Exception $exce) {
      echo $exce;
    }
    
  }
  /* Verifica se existe um cep */
  private function existsCep(): bool{
    $cep = $this->data['cep'];
    $stmt = $this->connection->prepare("SELECT `cep` FROM `tb_endereco` WHERE `cep` = ?");
    $stmt->bindParam(1, $cep);

    try {
      $stmt->execute();
      $row = $stmt->fetch(PDO::FETCH_OBJ);

      if(isset($row->cep)){
          return true;
      }else{
          return false;
      }

    } catch (Exception $exce) {
      echo $exce;
    }

   
  }
}