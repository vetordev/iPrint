<?php

namespace Source\Models\Product;

use Exception;
use PDO;
use Source\Models\Request;

class Product extends Request{
  
  public function __construct($connection)
  {
    $this->connection = $connection;
  }

  public function index(){
    $stmt = $this->connection->prepare("SELECT `name`, `desc`, `price` FROM `Products`");
    try {
      $stmt->execute();

      $products = [];
      while ($row = $stmt->fetch(PDO::FETCH_OBJ )) {
        # Adicionando as informações de um produto ao array
        $product = $row->name;
        $product .= $row->desc;
        $product .= $row->price;

        $products[] = $product;
      }
    
      $this->request('200');

    } catch (Exception $exce) {
      $this->request($exce);
    }
  }

  
  
}