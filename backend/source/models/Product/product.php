<?php

namespace Source\Models\Product;

use Exception;
use PDO;

class Product{
  
  /** @var PDO */
  private $connection;

  public function __construct($connection)
  {
    $this->connection = $connection;
  }

  public function index(){
    $stmt = $this->connection->prepare("SELECT `name`, `desc`, `price` FROM `Products`");
    try {
      $stmt->execute();

      request('200');
    } catch (Exception $exce) {
      echo $exce;
    }
    
  }

  private function request($req){
    echo json_encode($req);
  }

}