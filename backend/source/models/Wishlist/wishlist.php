<?php


namespace Source\Models\Wishlist;

use Exception;
use PDO;

use function GuzzleHttp\json_encode;

class Wishlist {

  private $user_id;
  private $request;

  /** @var PDO*/
  private $connection;

  public function __construct($user_id, $connection)
  {
    $this->user_id = $user_id;
    $this->connection = $connection;

  }
  public function show(){
    $stmt = $this->connection->prepare('SELECT `p.name`, `p.desc`, `p.price` FROM `Wishlist` AS `w` JOIN `Product` AS `p` ON(`w.product_id` = `p.product_id`) WHERE `w.user_id` = ?');
    $stmt->bindParam(1, $this->user_id);

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

      request($products);

    } catch (Exception $exce) {
      echo $exce;
    }
  }
  public function store($product){
    $stmt = $this->connection->prepare('INSERT INTO `Wishlist`(`name`, `desc`, `price`, `user_id`) VALUES (?, ?, ?, ?)');
    $stmt->bindParam(1, $product['name']);
    $stmt->bindParam(2, $product['desc']);
    $stmt->bindParam(3, $product['price']);
    $stmt->bindParam(4, $this->user_id);

    try {
      $stmt->execute();

      request('200');
      
    } catch (Exception $exce) {
      echo $exce;
    }

  }
  public function destroy($wish_id){
    $stmt = $this->connection->prepare('DELETE FROM `Wishlist` WHERE `wish_id` = ?');
    $stmt->bindParam(1, $wish_id);

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




