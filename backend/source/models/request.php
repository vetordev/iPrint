<?php

namespace Source\Models;

use PDO;

class Request{

  /** @var PDO */
  private $connection;

  private function request($req) {
    return json_encode($req);
    
  }
}