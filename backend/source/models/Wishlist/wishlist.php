<?php


namespace Source\Models\Wishlist;

use Exception;
use PDO;
use Source\Models\Request;

class Wishlist extends Request{

  private $client_id;

  public function __construct($client_id, $connection)
  {
    $this->client_id = $client_id;
    $this->connection = $connection;

  }
  public function show(){
    $stmt = $this->connection->prepare('SELECT `p.name`, `p.desc`, `p.price`, `p.product_id`, `w.wish_id` FROM `Wishlist` AS `w` JOIN `Product` AS `p` ON(`w.product_id` = `p.product_id`) WHERE `w.client_id` = ?');
    $stmt->bindParam(1, $this->client_id);

    try {
      $stmt->execute();
      $products = [];
      while ($row = $stmt->fetch(PDO::FETCH_OBJ )) {
        # Adicionando as informações de um produto ao array

        $product = [$row->name];
        $product[] = $row->price;
        $product[] = $row->product_id;
        $product[] = $row->wish_id;

        /*  */

        $products[] = $product;
      }

      $this->request($products);
      

    } catch (Exception $exce) {
      $this->request($exce);
    }
  }
  public function store($product){
    $stmt = $this->connection->prepare('INSERT INTO `Wishlist`(`product_id`, `client_id`) VALUES (?, ?, ?, ?)');
    $stmt->bindParam(1, $product);
    $stmt->bindParam(2, $this->client_id);

    try {
      $stmt->execute();

      $this->request('200');
      
    } catch (Exception $exce) {
      $this->request($exce);
    }

  }
  public function destroy($wish_id){
    $stmt = $this->connection->prepare('DELETE FROM `Wishlist` WHERE `wish_id` = ?');
    $stmt->bindParam(1, $wish_id);

    try {
      $stmt->execute();

      $this->request('200');
      
    } catch (Exception $exce) {
      $this->request($exce);
    }
  }

}




