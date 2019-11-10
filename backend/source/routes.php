<?php

use Source\Models\Product\Product;
use Source\Models\Wishlist\Wishlist;

require '../php/connection.php';

define("TYPE", $_POST['type']);
define("METHOD", $_POST['method']);
define("user_id", $_POST['user_id']);
define("data", $_POST['data']);



switch (TYPE) {
  case 'wishlist':
    $Wishlist = new Wishlist(user_id, $con);

    if (METHOD === "show")
      $req = $Wishlist->show();

    elseif(METHOD === 'store')
      $req = $Wishlist->store(data);

    elseif(METHOD === 'destroy')
      $req = $Wishlist->destroy(data);
    
    echo $req;
    break;
  
  case 'product':
    $Product = new Product($con);

    if(METHOD === 'index')
      $req = $Product->index();
      
    echo $req;
    break;

}